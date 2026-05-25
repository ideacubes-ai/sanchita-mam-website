import { motion } from 'motion/react';
import { Mail, MessageCircle, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactUsPage() {
  return (
    <div className="flex-1 bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-100 via-pink-50 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full text-orange-600 font-black text-sm uppercase tracking-widest shadow-sm mb-6 border-2 border-orange-100"
          >
            <Heart className="w-5 h-5 text-red-500 fill-red-500" /> We'd love to hear from you
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-950 leading-tight tracking-tight mb-6"
          >
            Get in <span className="text-orange-500 relative inline-block">
              Touch!
              <svg className="absolute w-[105%] h-3 md:h-5 text-pink-400 -bottom-1 -left-2 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,25 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Have questions about our phonics programs? Want to say hello? Drop us a message, and our friendly team will get back to you!
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 space-y-20">
        
        <div className="grid sm:grid-cols-2 gap-8 pb-10">
          {/* Email Card */}
          <motion.a
            href="mailto:09sanchitaghosh@gmail.com"
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2.5rem] p-8 sm:p-12 border-4 border-blue-100 shadow-sm transition-all hover:border-blue-300 hover:shadow-xl text-center group block"
          >
            <div className="w-20 h-20 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-blue-950 mb-3">Email Us</h3>
            <p className="text-gray-500 font-medium mb-6">For general queries and support</p>
            <p className="text-xl font-bold text-blue-600">09sanchitaghosh@gmail.com</p>
          </motion.a>

          {/* WhatsApp Card */}
          <motion.a
            href="https://wa.me/919831820191" // Update with real WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2.5rem] p-8 sm:p-12 border-4 border-green-100 shadow-sm transition-all hover:border-green-300 hover:shadow-xl text-center group block"
          >
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-blue-950 mb-3">WhatsApp Us</h3>
            <p className="text-gray-500 font-medium mb-6">For quick chats and quick replies</p>
            <p className="text-xl font-bold text-green-600">+91 9831820191</p>
          </motion.a>
        </div>
        
        <div className="text-center bg-pink-50 p-8 sm:p-12 rounded-[2.5rem] border-4 border-pink-100">
          <h2 className="text-3xl font-black text-blue-950 mb-4">Ready to start the learning adventure?</h2>
          <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto mb-8">
            Experience our interactive phonics classes first-hand. It's completely free and super fun!
          </p>
          <Link 
            to="/book-trial"
            className="inline-flex items-center justify-center gap-2 bg-pink-500 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-[0_6px_0px_#be185d] hover:bg-pink-400 active:translate-y-2 active:shadow-[0_0px_0px_#be185d] transition-all"
          >
            <Sparkles className="w-5 h-5 fill-current" /> Book a Free Trial
          </Link>
        </div>

      </section>
    </div>
  );
}
