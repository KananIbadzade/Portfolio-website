import { ThemeProvider, useTheme } from './context/ThemeContext'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Stars from './components/Stars'
import Snow from './components/Snow'
import DayParticles from './components/DayParticles'

function AppContent() {
  const { isDark } = useTheme()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-transparent transition-colors duration-300 relative overflow-hidden">
      {/* Christmas Snow Effect - Original Stars effect commented out below */}
      {/* {isDark ? <Stars /> : <DayParticles />} */}
      {isDark ? <Snow /> : <DayParticles />}
      <div className="relative z-20">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App; 