import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ComparisonSection } from './components/ComparisonSection';
import { ServicesSection } from './components/ServicesSection';
import { RateCalculator } from './components/RateCalculator';
import { HowItWorks } from './components/HowItWorks';
import { LocationMap } from './components/LocationMap';
import { AiAssistant } from './components/AiAssistant';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070d] text-[#f1f4fb] selection:bg-[#ff8a00] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ComparisonSection />
        <ServicesSection />
        <RateCalculator />
        <HowItWorks />
        <LocationMap />
        <AiAssistant />
        <Pricing />
        <Testimonials />
        <FaqSection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
