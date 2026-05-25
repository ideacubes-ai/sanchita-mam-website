import { motion } from 'motion/react';
import { 
  XCircle, 
  CheckCircle2, 
  Sparkles, 
  BookOpen,
  Brain,
  Frown,
  Smile,
  AlertCircle,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden border-b-2 border-slate-200">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-blue-100/40 z-0 pointer-events-none"></div>
      
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-xl text-blue-900 font-black text-xs md:text-sm uppercase tracking-widest"
          >
            Two Paths. Two Outcomes.
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900 tracking-tight"
          >
            The Science of <span className="text-orange-500 relative inline-block">
              Reading
              <svg className="absolute w-[110%] h-4 md:h-5 text-yellow-400 -bottom-1 -left-2 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,25 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {/* Traditional Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="flex flex-col bg-gradient-to-br from-rose-50 to-red-50 rounded-[32px] overflow-hidden border-4 border-rose-100 shadow-[8px_8px_0px_#ffe4e6] relative group hover:-translate-y-2 transition-transform duration-300 h-full"
            >
              <div className="bg-rose-100/80 px-8 py-8 border-b-4 border-rose-100 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-rose-200 flex items-center justify-center shrink-0">
                  <Frown className="w-8 h-8 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-rose-950 tracking-tight leading-none mb-1">
                    Whole Word
                  </h3>
                  <span className="text-rose-700 font-bold text-sm md:text-base uppercase tracking-wider">The Traditional Way</span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col gap-8 h-full bg-white/40">
                <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-rose-100 flex items-center justify-center text-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <BookOpen className="absolute -left-4 -bottom-4 w-20 h-20 text-rose-50 opacity-60" />
                  <p className="text-lg md:text-xl font-bold text-rose-800 italic relative z-10">
                    "Memorize this word, hope it sticks."
                  </p>
                </div>

                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="flex items-center gap-2 text-lg md:text-xl font-black text-rose-950 mb-2">
                       <span className="bg-rose-200 text-rose-800 w-7 h-7 rounded-full flex items-center justify-center text-xs">1</span>
                      What it is
                    </h4>
                    <p className="text-rose-900/70 font-semibold leading-relaxed pl-9">
                      Children memorize words using visual guessing and cues.
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-lg md:text-xl font-black text-rose-950 mb-2">
                       <span className="bg-rose-200 text-rose-800 w-7 h-7 rounded-full flex items-center justify-center text-xs">2</span>
                      How it works
                    </h4>
                    <p className="text-rose-900/70 font-semibold leading-relaxed pl-9">
                      Child memorizes "dog" as a picture but cannot decode "fog" or "log".
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-lg md:text-xl font-black text-rose-950 mb-2">
                       <span className="bg-rose-200 text-rose-800 w-7 h-7 rounded-full flex items-center justify-center text-xs">3</span>
                      Kid's Experience <span className="text-sm font-bold text-rose-700/60 uppercase tracking-widest">(Age 4-5)</span>
                    </h4>
                    <p className="text-rose-900/70 font-semibold leading-relaxed pl-9">
                      Confusion, guessing, frustration, and low confidence.
                    </p>
                  </div>

                  <div className="pt-6 border-t-2 border-rose-200/60">
                    <h4 className="text-xl font-black text-rose-950 mb-4 flex items-center gap-2">
                      <AlertCircle className="w-6 h-6 text-rose-600" /> Drawbacks
                    </h4>
                    <ul className="space-y-3">
                      {['Heavy memorization load', 'Poor transfer to new words', 'Struggling readers fall behind quickly'].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-rose-900/80 font-bold">
                          <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-rose-900 p-6 text-center mt-auto">
                <p className="text-rose-100 font-bold text-lg md:text-xl tracking-tight">
                  Short-term memorization. <br className="md:hidden" />
                  <span className="text-white">Long-term struggles.</span>
                </p>
              </div>
            </motion.div>

            {/* Phonics Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="flex flex-col bg-gradient-to-br from-purple-50 to-blue-50 rounded-[32px] overflow-hidden border-4 border-purple-200 shadow-[8px_8px_0px_#e9d5ff] relative group hover:-translate-y-2 transition-transform duration-300 h-full"
            >
              {/* Approved Stamp */}
              <motion.div 
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 12 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 10 }}
                className="absolute top-6 right-4 md:right-6 z-20 drop-shadow-sm"
              >
                <div className="bg-green-500 text-white font-black text-xs md:text-sm uppercase tracking-widest px-4 py-2 border-4 border-white rounded-2xl shadow-[4px_4px_0px_#166534] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white fill-green-600" />
                  Recommended
                </div>
              </motion.div>

              <div className="absolute top-16 right-8 z-10 hidden md:block">
                <Sparkles className="w-8 h-8 text-yellow-400 opacity-80" />
              </div>
              <div className="bg-purple-200/80 flex-none px-8 py-8 pr-40 border-b-4 border-purple-200 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-300 flex items-center justify-center shrink-0">
                  <Brain className="w-8 h-8 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-purple-950 tracking-tight leading-none mb-1">
                    Phonics
                  </h3>
                  <span className="text-purple-700 font-bold text-sm md:text-base uppercase tracking-wider">The Science of Reading</span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col gap-8 h-full bg-white/40">
                <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-purple-200 flex items-center justify-center text-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                   <Lightbulb className="absolute -right-4 -top-4 w-20 h-20 text-yellow-100 opacity-50" />
                  <p className="text-lg md:text-xl font-bold text-purple-800 italic relative z-10">
                    "Learn the code. Read every word."
                  </p>
                </div>

                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="flex items-center gap-2 text-lg md:text-xl font-black text-purple-950 mb-2">
                       <span className="bg-purple-200 text-purple-800 w-7 h-7 rounded-full flex items-center justify-center text-xs">1</span>
                      What it is
                    </h4>
                    <p className="text-purple-900/70 font-semibold leading-relaxed pl-9">
                      Children learn letter sounds and blending skills.
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-lg md:text-xl font-black text-purple-950 mb-2">
                       <span className="bg-purple-200 text-purple-800 w-7 h-7 rounded-full flex items-center justify-center text-xs">2</span>
                      How it works
                    </h4>
                    <p className="text-purple-900/70 font-semibold leading-relaxed pl-9">
                      Child learns /d/ + /o/ + /g/ → "dog" and can instantly read "fog" and "log".
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-lg md:text-xl font-black text-purple-950 mb-2">
                       <span className="bg-purple-200 text-purple-800 w-7 h-7 rounded-full flex items-center justify-center text-xs">3</span>
                      Kid's Experience <span className="text-sm font-bold text-purple-700/60 uppercase tracking-widest">(Age 4-5)</span>
                    </h4>
                    <p className="text-purple-900/70 font-semibold leading-relaxed pl-9">
                      Confidence, independence, curiosity, and excitement.
                    </p>
                  </div>

                  <div className="pt-6 border-t-2 border-purple-200/60">
                    <h4 className="text-xl font-black text-purple-950 mb-4 flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-purple-600" /> Benefits
                    </h4>
                    <ul className="space-y-3">
                      {['Works for any word, even new ones', 'Makes reading easier and more fun', 'Builds lifelong confidence'].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-purple-900/80 font-bold">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-900 p-6 text-center mt-auto relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2">
                   <Smile className="w-12 h-12 text-white opacity-10 rotate-12" />
                </div>
                <p className="text-purple-100 font-bold text-lg md:text-xl tracking-tight relative z-10">
                  Strong foundations today. <br className="md:hidden" />
                  <span className="text-white">Limitless possibilities tomorrow.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 md:mt-32 max-w-4xl mx-auto"
        >
          <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden border-4 border-slate-800 shadow-2xl">
            {/* Decors */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-[80px] opacity-30"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500 rounded-full blur-[80px] opacity-30"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
                Every child deserves a <br className="hidden md:block"/> method that works.
              </h3>
              <p className="text-xl md:text-2xl text-slate-300 font-bold mb-10">
                Phonics isn't just an option — <span className="text-yellow-400">it's the solution.</span>
              </p>
              
              <button className="bg-orange-500 text-white px-8 md:px-10 py-5 rounded-2xl font-black text-lg md:text-xl shadow-[6px_6px_0px_#c2410c] hover:shadow-[4px_4px_0px_#c2410c] hover:translate-y-[2px] active:shadow-[0px_0px_0px_#c2410c] active:translate-y-[6px] transition-all uppercase flex items-center justify-center gap-3 border-2 border-orange-600 group w-full md:w-auto">
                Book a Free Class
                <ArrowRight className="w-6 h-6 stroke-[3] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
