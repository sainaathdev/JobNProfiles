



import Categories from './components/Categories'
import CTASection from './components/CTASection'
import FeaturedJobs from './components/FeaturedJobs'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PremiumFeatures from './components/PremiumFeatures'
import TopBanner from './components/TopBanner'
import TopCompanies from './components/TopCompanies'

function App() {
  

  return (
    <>
      <div className="font-sans">
      <TopBanner />
      <Navbar />
      <Hero />
      <PremiumFeatures />
      <FeaturedJobs />
      <TopCompanies />
      <Categories />
      <CTASection />
      <Footer />
      </div>
    </>
  )
}

export default App
