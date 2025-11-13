import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ComponentsDemo from './pages/ComponentsDemo.jsx'
import Overview from './pages/Overview.jsx'
import Animations from './pages/Animations.jsx'
import CatalystDemo from './catalyst/CatalystDemo.jsx'
import DaisyDemo from './daisy/DaisyDemo.jsx'
import ShadcnDemo from './shadcn/ShadcnDemo.jsx'
import './index.css'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <BrowserRouter>
      <Layout isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)}>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/components" element={<ComponentsDemo />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/catalyst" element={<CatalystDemo />} />
          <Route path="/daisy" element={<DaisyDemo />} />
          <Route path="/shadcn" element={<ShadcnDemo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
