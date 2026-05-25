import { motion } from 'motion/react';
import { KeyRound, Sparkles, DoorOpen, ArrowRight } from 'lucide-react';

export default function UnlockReading() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-950 rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl border-4 border-blue-900 text-center"
        >
          {/* Background decorations */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-40"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-500 rounded-full blur-[120px] opacity-30"></div>
          
          <div className="absolute top-12 left-12 hidden md:block">
            <Sparkles className="w-12 h-12 text-yellow-400 opacity-80" />
          </div>
          <div className="absolute bottom-12 right-12 hidden md:block">
            <KeyRound className="w-16 h-16 text-blue-400 opacity-40 -rotate-45" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <div className="bg-blue-800/50 text-blue-200 font-black text-xs md:text-sm uppercase tracking-widest px-4 py-2 rounded-xl mb-8 border border-blue-700/50 flex items-center gap-2">
              <DoorOpen className="w-4 h-4" /> The Secret Code
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 tracking-tight">
              English has thousands of words, but only <span className="text-orange-400 relative inline-block">
                ~44 sounds.
                <svg className="absolute w-full h-3 md:h-4 text-purple-500 -bottom-1 -left-0 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,25 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-blue-200 font-bold mb-6">
              Learning sounds unlocks them all.
            </p>
            
            <p className="text-lg md:text-xl text-blue-100/90 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
              Phonics programs are the doorway to the wonderful world of reading. It's time to let your child experience the same with our classes.
            </p>

            <button className="bg-orange-500 text-white px-8 md:px-10 py-5 rounded-2xl font-black text-lg shadow-[6px_6px_0px_#9a3412] hover:shadow-[4px_4px_0px_#9a3412] hover:translate-y-[2px] active:shadow-[0px_0px_0px_#9a3412] active:translate-y-[6px] transition-all uppercase flex items-center gap-3 border-2 border-orange-700 group">
              Start Their Journey
              <ArrowRight className="w-6 h-6 stroke-[3] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
