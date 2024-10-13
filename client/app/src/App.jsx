import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollButton from './components/ScrollButton'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
      <ScrollButton />
    </div>
  )
}

export default App
