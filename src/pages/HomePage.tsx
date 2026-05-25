import Hero from '../components/Hero';
import PerfectFit from '../components/PerfectFit';
import Features from '../components/Features';
import Comparison from '../components/Comparison';
import UnlockReading from '../components/UnlockReading';
import GrowthSection from '../components/GrowthSection';
import LevelsSection from '../components/LevelsSection';
import Testimonials from '../components/Testimonials';
import SubscriptionPlans from '../components/SubscriptionPlans';
import FAQSection from '../components/FAQSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PerfectFit />
      <Features />
      <Comparison />
      <UnlockReading />
      <GrowthSection />
      <LevelsSection />
      <SubscriptionPlans />
      <Testimonials />
      <FAQSection />
    </>
  );
}
