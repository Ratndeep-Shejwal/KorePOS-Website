import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import './App.css'

// ── GLOBAL COMPONENTS ─────────────────────────────
import Header from './components/Header'
import Footer from './components/footer'

// ── PAGES ─────────────────────────────────────────
import Home from './pages/Home'
import KoreposLite from './pages/korepos-lite'
import KoreposPro from './pages/korepos-pro'

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="korepos-lite" element={<KoreposLite />}/>
          <Route path="korepos-pro" element={<KoreposPro />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ReactLenis>
  )
}

export default App