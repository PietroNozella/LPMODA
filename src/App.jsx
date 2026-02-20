import Container from './components/Layout/Container'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import HeroSection from './components/Hero/HeroSection'
import TransitionSection from './components/Section/TransitionSection'
import AboutSection from './components/Section/AboutSection'
import WorkWithSection from './components/Section/WorkWithSection'

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Container>
        <HeroSection />
        <TransitionSection />
        <AboutSection />
        <WorkWithSection name="LARISSA ANTONELLI" />
      </Container>
      <Footer />
    </div>
  )
}

export default App
