import React from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Details from './components/Details'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-semibold text-emerald-900">Rural House</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-emerald-800/80">
          <a href="#gallery" className="hover:text-emerald-900">Photos</a>
          <a href="#contact" className="hover:text-emerald-900">Contact</a>
        </nav>
      </header>

      <main id="top">
        <Hero />
        <Gallery />
        <Details />
        <Contact />
      </main>

      <footer className="border-t border-emerald-100 py-10 text-center text-sm text-emerald-700">
        © {new Date().getFullYear()} Rural House • Made with love on the farm
      </footer>
    </div>
  )
}

export default App
