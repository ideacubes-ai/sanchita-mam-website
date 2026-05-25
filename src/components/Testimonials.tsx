import { motion } from 'motion/react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    author: "Sarah T.",
    role: "Parent of Leo (5)",
    text: "My son went from struggling with letters to reading full short stories in just a few weeks. The interactive games are an absolute game-changer!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    author: "Mark D.",
    role: "Father of two",
    text: "Finally, an educational app that my kids actually ask to play. It's so colorful and engaging, they don't even realize they're learning phonics.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=mark"
  },
  {
    id: 3,
    author: "Emily R.",
    role: "Kindergarten Teacher",
    text: "As an educator, I highly recommend this to all my students' parents. It aligns perfectly with foundational reading principles we use in the classroom.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=emily"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-sky-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-xl text-blue-700 font-black text-xs md:text-sm uppercase tracking-widest"
          >
            Success Stories
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-blue-900 tracking-tight"
          >
            Loved by Parents <span className="text-[#ff6900] relative inline-block">
              & Educators
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
            className="text-xl text-blue-800/80 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Join hundreds of families who have discovered the joy of reading through interactive play and structured phonics.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="bg-white rounded-3xl p-8 border-2 border-blue-100 shadow-[8px_8px_0px_#bae6fd] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#bae6fd] transition-all relative flex flex-col group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
              <Quote className="absolute top-6 right-6 w-10 h-10 text-sky-200 fill-sky-100/50 z-10" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(t.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-blue-900 text-lg font-medium mb-8 relative z-10 leading-relaxed grow">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-sky-100">
                <img 
                  src={t.avatar} 
                  alt={t.author}
                  className="w-14 h-14 rounded-full border-2 border-sky-200 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-blue-900 text-lg">{t.author}</h4>
                  <p className="text-sm text-blue-700/70 font-bold uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            to="/testimonials"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-wide hover:bg-blue-700 hover:-translate-y-1 shadow-[8px_8px_0px_#1e3a8a] hover:shadow-[6px_6px_0px_#1e3a8a] transition-all active:translate-y-1 active:shadow-[0px_0px_0px_#1e3a8a]"
          >
            Read More Success Stories <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
