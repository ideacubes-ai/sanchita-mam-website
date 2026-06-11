import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import BookTrialPage from './pages/BookTrialPage';
import PhonicsGuidePage from './pages/PhonicsGuidePage';
import VideosPage from './pages/VideosPage';
import ContactUsPage from './pages/ContactUsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import AboutUsPage from './pages/AboutUsPage';

export default function App() {
  return (
    <div className="min-h-screen bg-orange-50 font-sans text-blue-900 selection:bg-orange-200 flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/book-trial" element={<BookTrialPage />} />
          <Route path="/guide" element={<PhonicsGuidePage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
