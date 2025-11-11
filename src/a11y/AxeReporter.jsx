import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const AXE_SRC = 'https://cdn.jsdelivr.net/npm/axe-core@4.9.0/axe.min.js'

function loadAxe() {
  if (typeof document === 'undefined') return Promise.resolve()
  if (window.__axeLoadPromise) return window.__axeLoadPromise

  window.__axeLoadPromise = new Promise((resolve, reject) => {
    if (window.axe) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = AXE_SRC
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load axe-core'))
    document.head.appendChild(script)
  })

  return window.__axeLoadPromise
}

function logViolations(violations) {
  if (!violations?.length) {
    console.info('%caxe-core', 'font-weight:bold;', 'No accessibility violations found on this view.')
    return
  }

  console.groupCollapsed(`%caxe-core%c ${violations.length} violation(s)`, 'font-weight:bold;color:#0ea5e9;', 'color:inherit;')
  violations.forEach((violation) => {
    console.groupCollapsed(violation.id, violation.help)
    console.log('Impact:', violation.impact)
    console.log('Description:', violation.description)
    console.log('Help:', `${violation.helpUrl}`)
    console.log('Nodes:', violation.nodes)
    console.groupEnd()
  })
  console.groupEnd()
}

async function runAxe() {
  await loadAxe()
  if (!window.axe) return

  const { violations } = await window.axe.run(document, {
    rules: {
      'color-contrast': { enabled: true },
    },
  })

  logViolations(violations)
}

function AxeReporter() {
  const location = useLocation()

  useEffect(() => {
    if (import.meta.env.PROD) return undefined
    let cancelled = false

    const timeout = window.requestIdleCallback
      ? window.requestIdleCallback(async () => {
          if (cancelled) return
          await runAxe()
        }, { timeout: 2000 })
      : setTimeout(async () => {
          if (cancelled) return
          await runAxe()
        }, 500)

    return () => {
      cancelled = true
      if (window.cancelIdleCallback && typeof timeout === 'number') {
        window.cancelIdleCallback(timeout)
      } else {
        clearTimeout(timeout)
      }
    }
  }, [location])

  return null
}

export default AxeReporter
