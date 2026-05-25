import { motion } from 'motion/react';
import { Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VideosPage() {
  return (
    <div className="flex-1 bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-100 via-purple-50 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 right-0 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full text-blue-600 font-black text-sm uppercase tracking-widest shadow-sm mb-6 border-2 border-blue-100"
          >
            <Play className="w-5 h-5 text-pink-500 fill-pink-500" /> Watch & Learn
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-950 leading-tight tracking-tight mb-6"
          >
            Discover the <span className="text-pink-600 relative inline-block">
              Magic
              <svg className="absolute w-[105%] h-3 md:h-5 text-yellow-400 -bottom-1 -left-2 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,25 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span> of Phonics
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Explore our collection of fun, engaging videos designed to help your child master phonics while having a blast.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 space-y-20">
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
            return (
              <VideoCard 
                key={num}
                title={`Phonics Class Sample ${num}`} 
                videoSrc={`/Sample Video-${num}.mp4#t=0.001`}
              />
            );
          })}
        </div>
        
        <div className="text-center bg-orange-50 p-8 sm:p-12 rounded-[2.5rem] border-4 border-orange-100">
          <h2 className="text-3xl font-black text-blue-950 mb-4">Want more interactive learning?</h2>
          <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto mb-8">
            These videos are just the beginning. Join our live interactive classes for a personalized learning experience!
          </p>
          <Link 
            to="/book-trial"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-[0_6px_0px_#1e3a8a] hover:bg-blue-500 active:translate-y-2 active:shadow-[0_0px_0px_#1e3a8a] transition-all"
          >
            <Sparkles className="w-5 h-5 fill-current" /> Book a Free Trial
          </Link>
        </div>

      </section>
    </div>
  );
}

function VideoCard({ title, videoSrc }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl overflow-hidden border-2 border-gray-100 shadow-sm group flex flex-col"
    >
      <div className={`aspect-[9/16] relative bg-slate-900 flex items-center justify-center`}>
        <video 
          src={videoSrc}
          controls
          preload="metadata"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">{title}</h3>
      </div>
    </motion.div>
  );
}
