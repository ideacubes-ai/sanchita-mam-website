import { motion } from 'motion/react';
import { BookOpen, Brain, Sparkles, Sprout, Star, Heart } from 'lucide-react';

const benefits = [
  {
    icon: BookOpen,
    title: "Accelerated Reading Independence",
    description: "Instead of memorizing entire words, children learn the core sounds. This fundamental decoding skill allows them to read unknown words accurately and confidently on their own.",
    color: "bg-blue-500",
    bgClass: "bg-blue-50 border-blue-200 shadow-[8px_8px_0px_#bfdbfe] hover:shadow-[12px_12px_0px_#93c5fd]",
    iconColor: "text-white",
    hoverRotate: "group-hover:rotate-6"
  },
  {
    icon: Brain,
    title: "Enhanced Cognitive Development",
    description: "Phonics improves brain connectivity. By bridging visual letters and auditory sounds, it strengthens neural pathways, boosting overall memory, focus, and analytical thinking.",
    color: "bg-purple-500",
    bgClass: "bg-purple-50 border-purple-200 shadow-[8px_8px_0px_#e9d5ff] hover:shadow-[12px_12px_0px_#d8b4fe]",
    iconColor: "text-white",
    hoverRotate: "group-hover:-rotate-6"
  },
  {
    icon: Sprout,
    title: "Rapid Vocabulary Expansion",
    description: "As children break down words phonetically, they can sound out complex vocabulary previously outside their reading level, rapidly expanding their mental dictionary and comprehension.",
    color: "bg-green-500",
    bgClass: "bg-emerald-50 border-emerald-200 shadow-[8px_8px_0px_#a7f3d0] hover:shadow-[12px_12px_0px_#6ee7b7]",
    iconColor: "text-white",
    hoverRotate: "group-hover:rotate-12"
  },
  {
    icon: Heart,
    title: "A Lifelong Love for Reading",
    description: "Removing the frustration of guessing builds immense confidence. When reading feels like an exciting puzzle rather than a stressful chore, children naturally develop a lifelong passion for books.",
    color: "bg-rose-500",
    bgClass: "bg-rose-50 border-rose-200 shadow-[8px_8px_0px_#fecdd3] hover:shadow-[12px_12px_0px_#fda4af]",
    iconColor: "text-white",
    hoverRotate: "group-hover:-rotate-12"
  }
];

export default function GrowthSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b-2 border-slate-100">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-orange-50 rounded-full blur-[100px] z-0 opacity-80"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-[100px] z-0 opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-xl text-green-900 font-black text-xs md:text-sm uppercase tracking-widest"
          >
            <Star className="w-4 h-4 fill-green-600" /> Transformational Impact
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900 tracking-tight"
          >
            How Phonics Nurtures Your <span className="text-[#ff6900] relative inline-block">
              Child's Growth
              <svg className="absolute w-[110%] h-4 md:h-5 text-yellow-400 -bottom-1 -left-2 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,25 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Beyond reading, a structured phonics approach builds the foundational cognitive skills needed for academic excellence and self-confidence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, type: "spring", stiffness: 100, damping: 12 }}
                className={`${benefit.bgClass} rounded-[28px] p-6 lg:p-8 border-4 transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Playful background blob */}
                <div className={`absolute -right-8 -top-8 w-32 h-32 ${benefit.color} opacity-10 rounded-full blur-3xl group-hover:scale-[2] transition-transform duration-700 ease-out z-0`}></div>
                
                <div className={`w-14 h-14 rounded-[1rem] ${benefit.color} shadow-[3px_3px_0px_rgba(0,0,0,0.1)] border-2 border-white/50 flex items-center justify-center mb-5 ${benefit.hoverRotate} transition-transform duration-300 relative z-10 group-hover:scale-110`}>
                  <Icon className={`w-7 h-7 ${benefit.iconColor}`} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight relative z-10">
                  {benefit.title}
                </h3>
                <p className="text-slate-700 font-medium leading-relaxed text-base relative z-10">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
