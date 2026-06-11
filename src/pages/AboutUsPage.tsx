import { motion } from 'motion/react';
import { Star, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUsPage() {
  const strengths = [
    "Specialized in teaching children aged 4–7 years",
    "Expert in Phonics, Advanced Reading, and Age-Appropriate Grammar",
    "Focus on building strong reading foundations from an early age",
    "Children can become fluent readers by age 6 when guided with the right learning approach",
    "Support for older students who still face reading and pronunciation difficulties",
    "Personalized one-on-one classes tailored to each child's learning pace",
    "Direct teaching by the instructor — no substitute teachers and no handovers",
    "Individual attention ensures better progress and confidence",
    "Interactive and engaging online lessons designed for young learners",
    "Proven focus on improving reading fluency, comprehension, and language skills"
  ];

  return (
    <div className="bg-orange-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-hidden flex flex-col items-center">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Floating Animated Emojis */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-12 left-12 md:top-24 md:left-32 text-5xl md:text-7xl opacity-80 drop-shadow-xl hidden sm:block"
        >
          📚
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
          className="absolute bottom-12 right-12 md:bottom-24 md:right-32 text-5xl md:text-7xl opacity-80 drop-shadow-xl hidden sm:block"
        >
          🍎
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 6, delay: 2, ease: "easeInOut" }}
          className="absolute top-24 right-16 md:top-32 md:right-48 text-5xl md:text-6xl opacity-80 drop-shadow-xl hidden sm:block"
        >
          ✨
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full text-orange-600 font-black text-sm uppercase tracking-widest shadow-sm mb-6 border-2 border-orange-100"
          >
            <Sparkles className="w-5 h-5 text-yellow-500 fill-yellow-500" /> About Our Journey
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-blue-900"
          >
            Building Confident Readers Through <span className="relative inline-block text-orange-500 z-10">
              Expert Phonics
              <svg className="absolute w-[110%] h-4 md:h-6 text-yellow-400 -bottom-1 md:-bottom-2 -left-2 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,25 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span> Instruction and Personalized Learning for <span className="relative inline-block text-orange-500 z-10">
              Over 20 Years
              <svg className="absolute w-[110%] h-4 md:h-6 text-yellow-400 -bottom-1 md:-bottom-2 -left-2 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,25 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span>.
          </motion.h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-orange-200 rounded-3xl translate-x-4 translate-y-4"></div>
              <div className="relative bg-orange-100 rounded-3xl p-2 border-4 border-blue-900 overflow-hidden">
                <img 
                  src="/sanchita_ghosh_picture.jpeg" 
                  alt="Principal instructor teaching" 
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-2xl shadow-xl rotate-3 border-4 border-orange-100">
                <p className="font-black text-2xl tracking-tighter">20+ Years</p>
                <p className="text-orange-400 font-bold uppercase tracking-widest text-sm">Experience</p>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg font-medium text-blue-900/80 leading-relaxed"
            >
              <p className="text-4xl md:text-5xl font-black text-blue-900 mb-8 leading-tight tracking-tight">
                Hi, I'm <span className="relative inline-block text-orange-500 z-10">
                  Sanchita.
                  <svg className="absolute w-[110%] h-3 md:h-4 text-yellow-400 -bottom-0 md:-bottom-1 -left-2 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,15 Q50,25 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </p>
              
              <p>
                I am a trained educator with over 20 years of teaching experience, specializing in Phonics, Reading, and Age-Appropriate Grammar. Having taught in renowned schools in Kolkata and guided hundreds of successful students, I am passionate about helping children become confident and fluent readers.
              </p>
              
              <p>
                I work primarily with children aged 4–7 years and also support older students who face reading challenges. Through personalized one-on-one online classes, I help children build strong literacy skills, confidence, and a lifelong love for reading.
              </p>
              
              <p>
                Today, I teach students across India as well as internationally, including Singapore, Dubai, and Doha. Every class is personally conducted by me, ensuring individual attention and a learning experience tailored to each child's needs.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-blue-900 relative text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#f97316 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Our Strengths</h2>
            <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 items-start bg-blue-800/50 p-6 rounded-2xl border border-blue-700 hover:border-orange-500 hover:bg-green-500 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="font-bold text-blue-50 leading-tight">
                  {strength}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link 
              to="/book-trial" 
              className="inline-flex bg-orange-500 text-white px-8 py-4 rounded-full font-black text-xl shadow-[6px_6px_0px_#c2410c] hover:bg-orange-400 hover:shadow-[4px_4px_0px_#c2410c] hover:translate-y-0.5 active:translate-y-2 active:shadow-none transition-all uppercase items-center gap-3 group"
            >
              Book a Free Trial Today
              <Star className="w-6 h-6 group-hover:fill-yellow-300 group-hover:text-yellow-300 transition-colors" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
