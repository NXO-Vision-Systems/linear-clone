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
import { Reveal } from '@/components/Reveal'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Logos />
        <Benefits />

        <div className="separator-fade mx-auto max-w-7xl" />
        <IntakeSection />

        <div className="separator-fade mx-auto max-w-7xl" />
        <PlanSection />

        <div className="separator-fade mx-auto max-w-7xl" />
        <BuildSection />

        <div className="separator-fade mx-auto max-w-7xl" />
        <ReviewSection />

        <div className="separator-fade mx-auto max-w-7xl" />
        <MonitorSection />

        <div className="separator-fade mx-auto max-w-7xl" />
        <QuotesSection />

        <CTA />
      </main>
      <Footer />
    </>
  )
}
