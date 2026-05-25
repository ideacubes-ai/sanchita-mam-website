import { motion } from 'motion/react';
import { Smile, Puzzle, Star, Heart, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Smile className="w-10 h-10 md:w-12 md:h-12 text-white" />,
    title: "Personalized Care",
    desc: "Every child learns differently. We celebrate their unique pace, giving them the individual attention they need to blossom and feel confident.",
    color: "bg-orange-500",
    shadow: "shadow-[8px_8px_0px_#c2410c]"
  },
  {
    icon: <Puzzle className="w-10 h-10 md:w-12 md:h-12 text-white" />,
    title: "Adaptive Journey",
    desc: "Our joyful curriculum bends and flexes, thoughtfully adapting to your child's specific reading level and natural curiosity.",
    color: "bg-blue-500",
    shadow: "shadow-[8px_8px_0px_#1d4ed8]"
  },
  {
    icon: <Star className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />,
    title: "Inspiring Mentors",
    desc: "More than just teachers; our educators are passionate, expert guides who make every phonics adventure truly unforgettable.",
    color: "bg-yellow-400",
    shadow: "shadow-[8px_8px_0px_#ca8a04]"
  },
  {
    icon: <Heart className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />,
    title: "Hearts & Minds",
    desc: "We blend smart educational play with social-emotional learning, nurturing both capable readers and kind, happy human beings.",
    color: "bg-rose-400",
    shadow: "shadow-[8px_8px_0px_#9f1239]"
  }
];

export default function Features() {
  return (
    <section id="classes" className="relative py-24 md:py-32 bg-orange-50 overflow-hidden border-b-2 border-orange-100">
      {/* Background decorations */}
      <div className="absolute top-10 left-10">
        <Sparkles className="w-8 h-8 text-yellow-400 opacity-60" />
      </div>
      <div className="absolute bottom-20 right-10">
        <Sparkles className="w-10 h-10 text-rose-300 opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 bg-orange-200 px-4 py-2 rounded-xl text-orange-900 font-black text-xs md:text-sm uppercase tracking-widest"
          >
            Our Approach
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-blue-900 tracking-tight relative inline-block"
          >
            The <span className="text-orange-500 relative">
              Magic
              <svg className="absolute w-[110%] h-4 md:h-6 text-yellow-400 -bottom-2 -left-2 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,25 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span> Ingredients
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-800/80 font-bold max-w-2xl mx-auto leading-relaxed"
          >
            We go beyond just reading. Our classes are crafted to spark joy and build lifelong confidence!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5, scale: 1.02 }}
              key={idx}
              className={`bg-white rounded-[32px] md:rounded-[40px] p-8 md:p-10 border-4 border-blue-100 hover:border-blue-200 transition-all shadow-[10px_10px_0px_#dbeafe] hover:shadow-[14px_14px_0px_#bfdbfe] group`}
            >
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center mb-6">
                <div className={`shrink-0 w-20 h-20 md:w-24 md:h-24 ${feature.color} rounded-[24px] flex items-center justify-center ${feature.shadow} group-hover:rotate-6 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-blue-900 uppercase tracking-tight leading-none">{feature.title}</h3>
              </div>
              <p className="text-blue-800/80 font-medium text-lg leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
