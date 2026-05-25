import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const allTestimonials = [
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
  },
  {
    id: 4,
    author: "Jessica M.",
    role: "Homeschooling Mom",
    text: "We've tried so many reading curriculums, but this is the first one that really clicked for my daughter. The progression feels so natural.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=jessica"
  },
  {
    id: 5,
    author: "David L.",
    role: "Parent of Mila (6)",
    text: "Mila used to cry when it was time to practice reading. Now she logs on by herself! The confidence she has gained is priceless.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=david"
  },
  {
    id: 6,
    author: "Rachel W.",
    role: "First Grade Teacher",
    text: "The breakdown of phonemes and digraphs is spot on. I use the resources in my classroom centers and the kids love them.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=rachel"
  },
  {
    id: 7,
    author: "Thomas B.",
    role: "Parent of twins",
    text: "Teaching twins to read simultaneously felt impossible until we found this. They learn at their own pace and the results are incredible.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=thomas"
  },
  {
    id: 8,
    author: "Amanda K.",
    role: "Reading Specialist",
    text: "The structured literacy approach used here is exactly what struggling readers need. It's highly effective and visually engaging.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=amanda"
  },
  {
    id: 9,
    author: "Michael C.",
    role: "Parent of Noah (4)",
    text: "Noah is already recognizing all his letters and sounds before starting kindergarten! This gave him the best head start.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=michael"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="bg-orange-50 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-xl text-blue-700 font-black text-xs md:text-sm uppercase tracking-widest"
          >
            Real Reviews
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-blue-900 tracking-tight"
          >
            Hear from our <span className="text-[#ff6900]">Community</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-800/80 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Discover how our structured phonics program is transforming early reading experiences for families everywhere.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTestimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
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
      </div>
    </div>
  );
}
