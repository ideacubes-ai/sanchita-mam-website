import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: "What if my child misses a class?",
    answer: "Don't worry! We'll try to arrange an alternative class for your child to make up for the missed session. If that's not possible, we'll share a video recording of the class they missed."
  },
  {
    question: "How do I track my child's progress?",
    answer: "We share regular progress reports every month and host parent-teacher meetings to discuss your child's development, areas of improvement, and current reading level."
  },
  {
    question: "What is the duration of each class?",
    answer: "Each live interactive session lasts for 45 minutes, perfectly timed to keep young minds engaged and focused without overwhelming them."
  },
  {
    question: "Do I need to buy any additional materials?",
    answer: "No additional materials are required! We provide all necessary digital resources, worksheets, and reading materials as part of your subscription."
  },
  {
    question: "Is there a refund policy if we are not satisfied?",
    answer: "Yes, we offer a 14-day money-back guarantee. If you feel the classes aren't the right fit for your child, simply let us know within the first two weeks for a full refund."
  },
  {
    question: "What if my child cross 7 years?",
    answer: "Please Don't worry, we have a special class for senior students too. Please contact us for more information."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full blur-[80px] opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full blur-[100px] opacity-40 pointer-events-none translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm tracking-widest uppercase mb-6"
          >
            <MessageCircleQuestion className="w-5 h-5" />
            Got Questions?
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight"
          >
            Frequently Asked <span className="text-orange-500 relative inline-block">
              Questions
              <svg className="absolute w-[110%] h-4 md:h-5 text-yellow-400 -bottom-1 -left-2 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,25 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-orange-50/50 border-2 rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'border-orange-300' : 'border-orange-100 hover:border-orange-200'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              >
                <span className="font-bold text-blue-950 text-lg sm:text-xl pr-8">{faq.question}</span>
                <div className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-orange-100 transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-orange-100' : ''}`}>
                  <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-orange-600' : 'text-blue-900'}`} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-600 font-medium leading-relaxed border-t border-orange-100/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 sm:mt-24 text-center relative z-20"
        >
          <Link to="/book-trial" className="bg-orange-500 hover:bg-orange-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-lg md:text-xl transition-all hover:scale-105 shadow-[0_8px_30px_rgb(249,115,22,0.3)] hover:shadow-[0_8px_40px_rgb(249,115,22,0.5)] border-2 border-orange-400 inline-block text-center mt-8">
            Book Free Trial
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
