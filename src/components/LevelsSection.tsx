import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Check } from 'lucide-react';

const levels = [
  {
    id: 'enabler',
    level: 'Foundation Level',
    title: 'Phonics Enabler',
    emoji: '🌱',
    image: '/small-girl-phonics-class.jpeg',
    points: [
      'Letter sounds & recognition',
      'Basic blending skills',
      'CVC words (cat, dog, etc.)',
      'Short vowel sounds',
      'Early sight words'
    ]
  },
  {
    id: 'champion',
    level: 'Intermediate Level',
    title: 'Phonics Champion',
    emoji: '⭐',
    image: '/mid-boy-phonics-class.jpeg',
    points: [
      'Consonant digraphs (sh, ch, th)',
      'Initial and final blends',
      'Magic E (Silent E) words',
      'Long vowel sounds',
      'Reading simple stories'
    ]
  },
  {
    id: 'perfecting',
    level: 'Proficient Level',
    title: 'Perfecting Phonics',
    emoji: '🚀',
    image: '/arabina-girl-phonics-class.jpeg',
    points: [
      'Reading short sentences',
      'Bossy R rules',
      'Exception words',
      'Floss Rule',
      'Reading long sentences'
    ]
  }
];

const milestones = [
  'Confidence Booster',
  'Self Esteem booster',
  'Creativity Enhancer',
  'Cognition Enhancer',
  'Emotional Awareness',
  'Fluent speech'
];

export default function LevelsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-[#162556] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl text-indigo-100 font-black text-xs md:text-sm uppercase tracking-widest"
          >
            Structured Journey
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white tracking-tight"
          >
            Our Learning <span className="text-[#ff6900] relative inline-block">
              Milestones
              <svg className="absolute w-[110%] h-4 md:h-5 text-[#fdc700] -bottom-1 -left-2 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,25 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-indigo-200 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            A step-by-step journey designed to turn early learners into confident, fluent readers.
          </motion.p>
        </div>

        {/* Custom Tabs */}
        <div className="flex overflow-x-auto md:overflow-visible hide-scrollbar snap-x mb-0 z-10 relative">
          {levels.map((level, index) => (
            <button
              key={level.id}
              onClick={() => setActiveTab(index)}
              className={`min-w-[200px] flex-1 py-4 px-4 md:px-6 text-center transition-all duration-300 relative snap-start shrink-0 md:shrink border-indigo-400/20 ${
                activeTab === index 
                  ? 'bg-[#20306A] text-white rounded-t-2xl md:rounded-t-3xl border-t border-l border-r z-20 shadow-[0_-8px_15px_rgba(0,0,0,0.2)]' 
                  : 'bg-transparent text-indigo-300 hover:bg-white/5 border-b z-10'
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className={`text-xs md:text-sm font-bold uppercase tracking-widest ${activeTab === index ? 'text-yellow-400' : 'text-indigo-400/60'}`}>
                  {level.level}
                </span>
                <span className="text-lg md:text-xl font-black tracking-tight flex items-center gap-2">
                  {level.title}
                  <motion.span
                    animate={activeTab === index ? { 
                      rotate: [0, -10, 10, -10, 10, 0], 
                      scale: [1, 1.2, 1.2, 1.2, 1.2, 1] 
                    } : { rotate: 0, scale: 1 }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: activeTab === index ? Infinity : 0,
                      repeatType: "loop",
                      repeatDelay: 1
                    }}
                    className="inline-block text-xl"
                  >
                    {level.emoji}
                  </motion.span>
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="bg-[#20306A] rounded-b-3xl rounded-tr-3xl md:rounded-tl-none md:rounded-tr-none md:rounded-b-[2.5rem] p-8 md:p-12 border-x border-b border-t-0 md:border-t border-indigo-400/20 relative overflow-hidden shadow-2xl -mt-px z-10">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center"
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4"></div>
                <img 
                  src={levels[activeTab].image} 
                  alt={levels[activeTab].title} 
                  className="w-full h-[250px] md:h-[350px] object-cover rounded-3xl relative z-10 border-4 border-[#162556] shadow-lg group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300"
                />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                  {levels[activeTab].title}
                </h3>
                <p className="text-lg text-indigo-200 font-bold mb-6">
                  Your child will learn the following aspects of phonics:
                </p>
                <ul className="space-y-4">
                  {levels[activeTab].points.map((point, idx) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      key={idx} 
                      className="flex items-center gap-3 text-indigo-50 font-semibold text-lg"
                    >
                      <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 shadow-sm">
                         <Check className="w-4 h-4 text-indigo-950 stroke-[3] " />
                      </div>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Milestones Includes (Always Visible) */}
          <div className="mt-16 pt-10 border-t border-indigo-400/20 text-center">
            <h4 className="text-2xl font-black text-white mb-8">
              Each of the above Milestones Includes
            </h4>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-[#2a3c82] px-4 py-2 rounded-xl text-indigo-100 font-bold shadow-sm border border-indigo-400/20">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" />
                  {milestone}
                </div>
              ))}
            </div>

            <div className="mt-14 relative z-20">
              <Link to="/book-trial" className="bg-orange-500 hover:bg-orange-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-lg md:text-xl transition-all hover:scale-105 shadow-[0_8px_30px_rgb(249,115,22,0.3)] hover:shadow-[0_8px_40px_rgb(249,115,22,0.5)] border-2 border-orange-400 inline-block">
                Book Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
