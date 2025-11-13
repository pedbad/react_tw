import { NavLink, useLocation } from 'react-router-dom'
import AxeReporter from '../a11y/AxeReporter.jsx'

function Layout({ children, isDark, onToggleTheme }) {
  const location = useLocation()
  const isDaisyPage = location.pathname.startsWith('/daisy')

  return (
    <div className="min-h-screen bg-surface-base text-text-primary transition-base">
      <header className="site-header">
        <div className="site-header-inner ds-scope">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-heading text-xl">
              eL
            </div>
            <div>
              <p className="site-title">eLearning design system</p>
              <p className="body-sm">React + Tailwind demo</p>
            </div>
          </div>

          <nav className="site-nav">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
              Overview
            </NavLink>
            <NavLink
              to="/components"
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
            >
              Components
            </NavLink>
            <NavLink
              to="/animations"
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
            >
              Animations
            </NavLink>
            <NavLink
              to="/catalyst"
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
            >
              Catalyst
            </NavLink>
            <NavLink
              to="/daisy"
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
            >
              Daisy
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <button type="button" className="btn btn-sm btn-primary-outline" onClick={onToggleTheme}>
              {isDark ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        </div>
      </header>

      <main className="px-4 py-12">
        {import.meta.env.DEV && <AxeReporter />}
        <div className={`mx-auto flex max-w-6xl flex-col gap-10 ${isDaisyPage ? '' : 'ds-scope'}`}>{children}</div>
      </main>
    </div>
  )
}

export default Layout
