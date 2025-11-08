import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ComponentsDemo from './pages/ComponentsDemo.jsx'
import Overview from './pages/Overview.jsx'
import Animations from './pages/Animations.jsx'
import './index.css'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <BrowserRouter>
      <Layout isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)}>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/components" element={<ComponentsDemo />} />
          <Route path="/animations" element={<Animations />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
