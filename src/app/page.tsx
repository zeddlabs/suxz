import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import About from './components/sections/About'
import Companies from './components/sections/Companies'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Learnings from './components/sections/Learnings'
import Testimonials from './components/sections/Testimonials'

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="">
      <Hero />
      <Learnings />
      <About />
      <Companies />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
    </>
  )
}
