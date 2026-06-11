import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const reasons = [
  { text: "Is currently 4 to 7 years of age.", color: "bg-emerald-400", check: "text-emerald-500", border: "border-emerald-400" },
  { text: "Has started showing curiosity about letters and reading.", color: "bg-pink-400", check: "text-pink-500", border: "border-pink-400" },
  { text: "Finds it challenging to decode unfamiliar words.", color: "bg-orange-300", check: "text-orange-500", border: "border-orange-300" },
  { text: "Relies on memorizing word shapes rather than reading them phonetically.", color: "bg-emerald-400", check: "text-emerald-500", border: "border-emerald-400" },
  { text: "Needs a confidence boost in their reading abilities.", color: "bg-pink-400", check: "text-pink-500", border: "border-pink-400" },
  { text: "Thrives in an engaging, interactive, and encouraging learning space.", color: "bg-orange-300", check: "text-orange-500", border: "border-orange-300" }
];

export default function PerfectFit() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50/40 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full border-[3px] border-yellow-400/60 -translate-y-1/4 translate-x-1/3 z-0 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-pink-200 rounded-full blur-[80px] opacity-40 z-0 pointer-events-none -translate-x-1/2 flex items-center justify-center" />
      <div className="absolute top-24 left-[30%] text-6xl opacity-20 transform -rotate-12 pointer-events-none">✨</div>
      <div className="absolute bottom-24 right-[5%] text-5xl opacity-20 transform rotate-12 pointer-events-none">⭐</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Image backdrop shapes */}
            <div className="absolute inset-0 bg-yellow-400 rounded-[2.5rem] transform rotate-3 scale-[1.02] z-0" />
            <div className="absolute inset-0 bg-pink-400 rounded-[2.5rem] transform -rotate-2 scale-[1.02] z-0" />
            
            <div className="relative rounded-[2rem] bg-white shadow-2xl p-2 z-10 aspect-[4/3]">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                <img 
                  src="/arabina-girl-phonics-class.jpeg" 
                  alt="Teacher and student in phonics class" 
                  className="w-full h-full object-cover block transform scale-[1.01] hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:-right-8 bg-white px-5 py-4 rounded-2xl shadow-xl border border-orange-100 z-20 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center font-black text-xl">
                100%
              </div>
              <div className="pr-4">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Engaging</p>
                <p className="text-gray-900 font-black text-sm lg:text-base">Interactive Classes</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-10"
          >
            <div className="space-y-6">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-xl text-orange-900 font-black text-xs md:text-sm uppercase tracking-widest"
              >
                Is It For You?
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-950 leading-tight tracking-tight pr-4">
                A perfect <span className="text-orange-500 relative inline-block">
                  fit
                  <svg className="absolute w-[110%] h-4 md:h-5 text-yellow-400 -bottom-1 -left-2 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,15 Q50,25 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                  </svg>
                </span> if your child:
              </h2>
            </div>

            <ul className="space-y-6">
              {reasons.map((reason, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-5"
                >
                  <div className="shrink-0">
                    <div className={`w-10 h-10 shadow-sm rounded-xl ${reason.color} flex items-center justify-center -rotate-[10deg]`}>
                      <div className={`w-10 h-10 rounded-xl bg-white border-[3px] ${reason.border} translate-x-1.5 -translate-y-1 flex items-center justify-center rotate-[10deg] shadow-sm`}>
                        <Check strokeWidth={4} className={`w-5 h-5 ${reason.check}`} />
                      </div>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-gray-900 leading-snug">
                    {reason.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
