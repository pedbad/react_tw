import { useEffect } from 'react'

export function useClickAway(ref, onAway) {
  useEffect(() => {
    function handleClick(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      onAway?.()
    }
    function handleKey(event) {
      if (event.key === 'Escape') {
        onAway?.()
      }
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)
    document.addEventListener('keydown', handleKey)

    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [ref, onAway])
}
