import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Star, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-orange-50/90 backdrop-blur-md border-b-2 border-orange-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 md:gap-3 text-blue-900 font-sans font-black uppercase tracking-tighter z-50">
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-blue-600 fill-blue-600" />
          </motion.div>
          <div className="flex flex-col items-start justify-center pt-1">
            <span className="text-xl md:text-2xl leading-[0.85]">Sanchita Mam's</span>
            <span className="text-orange-500 text-xs md:text-sm tracking-widest mt-1">Reading Classes</span>
          </div>
        </Link>
        
        <nav className="hidden xl:flex items-center gap-4 xl:gap-5 font-bold text-sm tracking-widest uppercase text-blue-900 whitespace-nowrap">
          <Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
          <Link to="/games" className="hover:text-orange-500 transition-colors">Games</Link>
          <Link to="/videos" className="hover:text-orange-500 transition-colors">Videos</Link>
          <Link to="/guide" className="hover:text-orange-500 transition-colors">Parent Guide</Link>
          <Link to="/#pricing" className="hover:text-orange-500 transition-colors">Pricing</Link>
          <Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link 
            to="/book-trial"
            className="hidden sm:flex bg-blue-600 text-white px-6 py-2 rounded-full font-black text-sm shadow-[4px_4px_0px_#1e3a8a] hover:bg-blue-700 active:translate-y-1 active:shadow-none transition-all uppercase items-center gap-2 group"
          >
            Book Free Trial
            <Star className="w-5 h-5 group-hover:fill-orange-400 group-hover:text-orange-400 transition-colors" />
          </Link>

          <button 
            className="xl:hidden p-2 text-blue-900 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-orange-50 border-b-2 border-orange-100 shadow-xl flex flex-col font-black text-blue-900 xl:hidden"
          >
            <nav className="flex flex-col py-6 px-6 gap-6 uppercase tracking-widest">
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-500 transition-colors">About Us</Link>
              <Link to="/games" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-500 transition-colors">Games</Link>
              <Link to="/videos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-500 transition-colors">Videos</Link>
              <Link to="/guide" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-500 transition-colors">Parent Guide</Link>
              <Link to="/#pricing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-500 transition-colors">Pricing</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-500 transition-colors">Contact Us</Link>
              
              <Link 
                to="/book-trial"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 bg-orange-500 text-white px-6 py-4 rounded-xl text-center shadow-[4px_4px_0px_#c2410c] active:translate-y-1 active:shadow-none transition-all uppercase flex justify-center items-center gap-2"
              >
                Book Free Trial
                <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
