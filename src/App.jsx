import Container from './components/Layout/Container'
import HeroSection from './components/Hero/HeroSection'
import TransitionSection from './components/Section/TransitionSection'
import WorkWithSection from './components/Section/WorkWithSection'

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Container>
        <HeroSection />
        <TransitionSection />
        <WorkWithSection name="KATIE" />
      </Container>
    </div>
  )
}

export default App
