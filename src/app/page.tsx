import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Logos from '@/components/Logos'
import Benefits from '@/components/Benefits'
import IntakeSection from '@/components/IntakeSection'
import PlanSection from '@/components/PlanSection'
import BuildSection from '@/components/BuildSection'
import ReviewSection from '@/components/ReviewSection'
import MonitorSection from '@/components/MonitorSection'
import QuotesSection from '@/components/QuotesSection'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Logos />
        <Benefits />
        <IntakeSection />
        <PlanSection />
        <BuildSection />
        <ReviewSection />
        <MonitorSection />
        <QuotesSection />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
