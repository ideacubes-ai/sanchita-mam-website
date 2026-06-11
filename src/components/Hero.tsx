import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Smile, Star, Heart, Sun, Music, Cloud, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-8 md:pt-12 pb-32 overflow-hidden border-b-2 border-orange-100">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-orange-50">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-48 h-48 bg-yellow-200 rounded-full opacity-40 blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} 
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-64 h-64 bg-orange-200 rounded-full opacity-40 blur-3xl"
        />
        <Star className="absolute top-32 left-1/4 text-orange-400 w-10 h-10 fill-orange-400 opacity-60" />
        <Star className="absolute bottom-32 right-1/4 text-blue-400 w-8 h-8 fill-blue-400 opacity-60" />
        <Sparkles className="absolute top-1/4 right-1/3 text-yellow-500 w-8 h-8 opacity-80" />
        
      </div>

      {/* Cute Childlike Elements Prominently Displayed */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-16 md:top-20 right-[2%] md:right-[5%] z-0"
      >
        <div className="relative">
          <div className="absolute inset-2 bg-yellow-400 blur-xl opacity-50 rounded-full"></div>
          <Sun className="text-yellow-500 w-16 h-16 md:w-24 md:h-24 fill-yellow-300 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)] relative z-10" />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute bottom-8 md:bottom-16 left-[2%] md:left-[5%] z-0"
      >
        <div className="relative">
          <div className="absolute inset-4 bg-white blur-xl opacity-60 rounded-full"></div>
          <Cloud className="text-blue-300 w-20 h-20 md:w-32 md:h-32 fill-white drop-shadow-[0_8px_15px_rgba(96,165,250,0.4)] relative z-10" />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ rotate: [-15, 15, -15], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-[25%] left-[45%] md:left-[48%] z-0 empty:hidden"
      >
        <Music className="text-rose-400 w-10 h-10 md:w-14 md:h-14 fill-rose-200 drop-shadow-[0_4px_8px_rgba(251,113,133,0.4)]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
        <div className="text-center md:text-left flex flex-col gap-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-orange-400 px-4 py-2 rounded-xl w-fit mx-auto md:mx-0 shadow-[4px_4px_0px_#c2410c] text-white font-black text-xs uppercase tracking-widest border-2 border-orange-500"
          >
            <Smile className="w-4 h-4 text-yellow-200 fill-yellow-200" />
            Ages: 4 to 7 Years
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[4.5rem] font-black leading-[0.9] tracking-tight text-blue-900 uppercase relative"
          >
            Building <span className="relative inline-block text-orange-500 z-10">
              Confident
              <svg className="absolute w-[110%] h-4 md:h-6 text-yellow-400 -bottom-1 md:-bottom-2 -left-2 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,25 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span><br/>Readers<br/>Everyday!
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-blue-800/80 font-bold max-w-md mx-auto md:mx-0 leading-relaxed"
          >
            Join our joyful online phonics classes. We help young minds master reading and speaking with expert-guided fun!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4"
          >
            <Link 
              to="/book-trial"
              className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-black text-xl shadow-[6px_6px_0px_#c2410c] hover:shadow-[4px_4px_0px_#c2410c] hover:translate-y-[2px] active:shadow-[0px_0px_0px_#c2410c] active:translate-y-[6px] transition-all uppercase flex items-center justify-center gap-3 border-2 border-orange-600"
            >
              Book Free Trial
              <ArrowRight className="w-6 h-6 stroke-[3]" />
            </Link>
            <Link 
              to="/videos"
              className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-black text-xl shadow-[6px_6px_0px_#bfdbfe] hover:shadow-[4px_4px_0px_#bfdbfe] hover:translate-y-[2px] active:shadow-[0px_0px_0px_#bfdbfe] active:translate-y-[6px] transition-all uppercase flex items-center justify-center gap-2 border-2 border-blue-200"
            >
              <Play className="w-6 h-6 stroke-[3] fill-blue-900" />
              Watch Videos
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="relative h-full flex items-center justify-center w-full min-h-[450px] lg:min-h-[600px] mt-8 lg:mt-0"
        >
          {/* Main Hero Visual Area - Overlapping Layout */}
          <div className="relative w-full max-w-[600px] lg:max-w-[750px] mx-auto mt-12 md:mt-0 flex items-center justify-center">
            {/* Background blobs for depth */}
            <div className="absolute inset-0 bg-yellow-300 rounded-full blur-[100px] opacity-40 mix-blend-multiply z-0 translate-x-10" />
            <div className="absolute -inset-10 bg-blue-300 rounded-full blur-[100px] opacity-30 mix-blend-multiply z-0 -translate-x-10" />
            
            {/* Left Column (Girl) */}
            <div className="w-[58%] flex flex-col relative z-20 mt-10 md:mt-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, rotate: -6 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                className="relative bg-white p-3 md:p-4 rounded-[28px] md:rounded-[36px] shadow-[12px_12px_0px_rgba(30,58,138,0.08)] border-4 border-blue-100 group"
              >
                <div className="relative w-full aspect-[4/5] md:aspect-square rounded-[20px] md:rounded-[24px] overflow-hidden bg-blue-100">
                  <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10"></div>
                  <img
                    src="/reading_girl_hero.jpeg"
                    alt="Happy kids learning"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 block scale-[1.01] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              
               <motion.div 
                animate={{ y: [0, -10, 0], rotate: [6, 0, 6] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-6 px-4 py-2 md:px-5 md:py-3 bg-yellow-400 rounded-[16px] md:rounded-[20px] shadow-[4px_4px_0px_#ca8a04] flex items-center justify-center z-30 border-2 border-white"
              >
                <span className="text-xl md:text-3xl font-black text-white uppercase font-display tracking-wider">READ</span>
              </motion.div>
            </div>

            {/* Right Column (Boy) */}
            <div className="w-[58%] flex flex-col relative z-10 -ml-8 md:-ml-12 -mt-16 md:-mt-24">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, rotate: 6 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                className="relative bg-white p-3 md:p-4 rounded-[28px] md:rounded-[36px] shadow-[12px_12px_0px_rgba(194,65,12,0.08)] border-4 border-orange-100 group"
              >
                <div className="relative w-full aspect-[4/5] md:aspect-square rounded-[20px] md:rounded-[24px] overflow-hidden bg-orange-50 relative">
                  <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay z-10"></div>
                  <img
                    src="/reading_boy_hero.jpeg"
                    alt="Boy reading a book"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 block scale-[1.01] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              

              {/* Floating Word blocks */}
              <motion.div 
                animate={{ y: [0, -12, 0], rotate: [-12, -8, -12] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-4 md:-right-6 px-4 py-2 md:px-5 md:py-3 bg-orange-400 rounded-[16px] md:rounded-[20px] shadow-[4px_4px_0px_#c2410c] flex items-center justify-center z-30 border-2 border-white"
              >
                <span className="text-lg md:text-2xl font-black text-white uppercase font-display tracking-wider">FUN</span>
              </motion.div>

              {/* Floating Element: Heart */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], rotate: [-10, 0, -10] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute top-[40%] -right-4 md:-right-8 w-12 h-12 md:w-16 md:h-16 bg-rose-400 rounded-full shadow-[4px_4px_0px_#9f1239] flex items-center justify-center z-30 border-4 border-white"
              >
                <Heart className="w-5 h-5 md:w-8 md:h-8 text-white fill-white" />
              </motion.div>
              
               <motion.div 
                animate={{ y: [0, 15, 0], rotate: [15, 20, 15] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-4 md:-bottom-6 right-8 md:right-12 px-4 py-2 md:px-5 md:py-3 bg-blue-500 rounded-[14px] md:rounded-[18px] shadow-[4px_4px_0px_#1e3a8a] flex items-center justify-center z-30 border-2 border-white"
              >
                <span className="text-base md:text-xl font-black text-white uppercase font-display tracking-wider">PLAY</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
