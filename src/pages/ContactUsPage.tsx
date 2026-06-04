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
            href="https://wa.me/919831820191"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2.5rem] p-8 sm:p-12 border-4 border-[#25d366]/20 shadow-sm transition-all hover:border-[#25d366]/40 hover:shadow-xl text-center group block"
          >
            <div className="w-20 h-20 bg-[#25d366]/10 text-[#25d366] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-black text-blue-950 mb-3">WhatsApp Us</h3>
            <p className="text-gray-500 font-medium mb-6">For quick chats and quick replies</p>
            <div className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-lg shadow-[0_4px_0px_#1da851] group-hover:bg-[#20bd5a] group-active:translate-y-1 group-active:shadow-none transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
            </div>
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
