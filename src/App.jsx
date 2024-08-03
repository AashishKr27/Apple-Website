import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Models from './components/Models';
import Features from './components/Features';

import * as Sentry from '@sentry/react'
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';


const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Models />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);