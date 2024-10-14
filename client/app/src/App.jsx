import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollButton from './components/ScrollButton'
import Service from './components/Service'
import Benefit from './components/Benefit'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Benefit />
      <Testimonial />
      <Contact />
      <Footer />
      <ScrollButton />
    </div>
  )
}

export default App
