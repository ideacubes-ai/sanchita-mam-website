import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Gift, Calendar, ArrowRight, User, Mail, CheckCircle2, Star, BookOpen, Home } from 'lucide-react';

const DATES = [
  { month: 'May', day: '23', active: true },
  { month: 'May', day: '24', active: false },
  { month: 'May', day: '25', active: false },
  { month: 'May', day: '26', active: false },
];

const TIME_SLOTS = [
  '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM',
  '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM',
  '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM',
  '07:00 PM', '08:00 PM', '09:00 PM'
];

const AGES = ['3 years', '4 years', '5 years', '6 years', '7+ years'];

const TIMEZONES = [
  'Asia/Kolkata',
  'Asia/Dubai',
  'Asia/Riyadh',
  'Asia/Kuwait',
  'Asia/Qatar',
  'Europe/London',
  'America/New_York',
  'America/Los_Angeles',
  'Australia/Sydney',
  'Europe/Berlin'
];

export default function BookTrialPage() {
  const [selectedDate, setSelectedDate] = useState('23');
  const [selectedTime, setSelectedTime] = useState('');
  const [timezone, setTimezone] = useState('Asia/Kolkata');
  const [isEditingTimezone, setIsEditingTimezone] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-orange-50 via-white to-pink-50 p-4 sm:p-6 lg:p-12 flex items-center justify-center min-h-[calc(100vh-80px)] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 opacity-30 text-8xl transform rotate-12 pointer-events-none filter blur-[2px]">🎁</div>
      <div className="absolute bottom-20 left-10 opacity-20 text-6xl transform -rotate-12 pointer-events-none filter blur-[1px]">✨</div>
      <div className="absolute top-1/2 left-1/4 opacity-10 text-9xl transform -rotate-45 pointer-events-none">⭐</div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[1300px] w-full mx-auto relative z-10 flex flex-col xl:flex-row bg-white rounded-[32px] sm:rounded-[48px] shadow-2xl overflow-hidden border-4 border-white lg:shadow-[24px_24px_0px_rgba(251,146,60,0.15)] ring-1 ring-gray-100"
      >
        
        {/* Left Side: Marketing / Value Proposition */}
        <div className="w-full xl:w-[45%] relative p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-blue-700 text-white overflow-hidden">
          {/* Background graphics */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-60 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-950 px-4 py-2 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest shadow-sm mb-8"
            >
              <Gift className="w-4 h-4 text-orange-600" /> Let the fun begin
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-5xl 2xl:text-6xl font-black leading-[1.05] tracking-tight mb-6"
            >
              Unlock Your Child's <span className="text-orange-500 relative inline-block">
                Reading
                <svg className="absolute w-[110%] h-4 md:h-6 text-yellow-400 -bottom-1 -left-2 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,25 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span> Potential
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-blue-100 font-medium leading-relaxed max-w-lg mb-8"
            >
              Book a <strong className="text-yellow-400 font-bold">FREE 45-minute</strong> interactive session and see how engaging reading can be.
            </motion.p>

            <motion.ul 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              {[
                "1-on-1 expert teacher attention",
                "Fun, interactive reading games",
                "Personalized phonics assessment"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-4 text-blue-50 font-semibold md:text-lg">
                  <div className="w-7 h-7 rounded-full bg-emerald-400 flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-950" />
                  </div>
                  {benefit}
                </li>
              ))}
            </motion.ul>

            {/* Testimonial Image block */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative -mx-4 sm:mx-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
            >
              <img 
                src="/reading_girl_hero.jpeg" 
                alt="Happy child reading" 
                className="w-full h-48 sm:h-56 object-cover object-[center_35%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 sm:p-6 pb-5 pt-16 text-white flex flex-col justify-end">
                 <div className="flex text-yellow-400 mb-2 gap-0.5">
                   <Star className="w-4 h-4 fill-current" />
                   <Star className="w-4 h-4 fill-current" />
                   <Star className="w-4 h-4 fill-current" />
                   <Star className="w-4 h-4 fill-current" />
                   <Star className="w-4 h-4 fill-current" />
                 </div>
                 <p className="text-sm sm:text-base font-semibold leading-snug">"My daughter loved her first session! She's already sounding out tricky words with confidence."</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: The Form or Success State */}
        <div className="w-full xl:w-[55%] flex flex-col p-6 sm:p-10 lg:p-12 xl:p-16 bg-white">
          <div className="max-w-2xl w-full mx-auto pb-8 xl:pb-0 h-full flex flex-col justify-center">
            {isSubmitted ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="text-center py-10"
               >
                 <motion.div 
                   animate={{ 
                     y: [0, -20, 0],
                     rotate: [0, 10, -10, 0] 
                   }}
                   transition={{ 
                     duration: 2,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                   className="text-8xl md:text-9xl mb-8"
                 >
                   🎉
                 </motion.div>
                 <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">Woohoo! You're In!</h2>
                 <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
                   High five! 🙌 Your trial class is officially locked in. Our most highly-trained carrier pigeons 🐦 are currently flying to your inbox with the class link and details.
                 </p>
                 <div className="bg-purple-50 rounded-3xl p-6 mb-10 border-2 border-purple-100">
                   <p className="text-purple-800 font-bold mb-2">What happens next?</p>
                   <p className="text-purple-600 text-sm font-medium">Keep an eye out for a WhatsApp message from our team. We might ask you for your child's favorite dinosaur! 🦕</p>
                 </div>
                 
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                   <Link 
                     to="/"
                     className="w-full sm:w-auto bg-blue-600 text-white py-4 px-8 rounded-2xl font-black text-lg uppercase tracking-widest shadow-[0_6px_0px_#1e3a8a] flex items-center justify-center gap-2 hover:bg-blue-500 transition-all active:translate-y-2 active:shadow-[0_0px_0px_#1e3a8a]"
                   >
                     <Home className="w-5 h-5" /> Go to Homepage
                   </Link>
                   <button 
                     onClick={() => setIsSubmitted(false)}
                     className="w-full sm:w-auto font-bold text-gray-500 hover:text-purple-600 transition-colors py-4 px-6"
                   >
                     Book another class
                   </button>
                 </div>
               </motion.div>
            ) : (
              <>
                <div className="mb-10 text-center xl:text-left">
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 tracking-tight">Claim Your Free Spot</h2>
                  <p className="text-gray-500 font-medium text-lg">Enter a few details below to secure your trial class.</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Child's Name */}
                 <div className="space-y-2.5">
                   <label className="block text-sm font-bold text-gray-700">Child's Name</label>
                   <div className="relative">
                     <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                     <input 
                       type="text" 
                       placeholder="First Name*" 
                       className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-400 font-medium text-gray-900"
                     />
                   </div>
                 </div>

                 {/* Age */}
                 <div className="space-y-2.5">
                   <label className="block text-sm font-bold text-gray-700">Age Range</label>
                   <div className="relative">
                     <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                     <select 
                        defaultValue=""
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none cursor-pointer font-medium text-gray-900"
                     >
                       <option value="" disabled>Select age</option>
                       {AGES.map(age => (
                         <option key={age} value={age}>{age}</option>
                       ))}
                     </select>
                   </div>
                 </div>
               </div>

               {/* Email ID */}
               <div className="space-y-2.5">
                 <label className="block text-sm font-bold text-gray-700">Parent's Email</label>
                 <div className="relative">
                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                   <input 
                     type="email" 
                     placeholder="parent@example.com*" 
                     className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-400 font-medium text-gray-900"
                   />
                 </div>
               </div>

               {/* Phone Number */}
               <div className="space-y-2.5">
                 <label className="block text-sm font-bold text-gray-700">WhatsApp Number</label>
                 <div className="flex bg-gray-50 border-2 border-gray-100 rounded-2xl overflow-hidden focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                   <select className="bg-transparent px-3 py-4 border-r-2 border-gray-100 font-bold text-gray-700 outline-none cursor-pointer w-[130px] shrink-0 text-sm hover:bg-gray-100 transition-colors">
                     <option value="+91">+91 (India)</option>
                     <option value="+971">+971 (UAE)</option>
                     <option value="+965">+965 (KWT)</option>
                     <option value="+966">+966 (KSA)</option>
                     <option value="+974">+974 (QAT)</option>
                   </select>
                   <input 
                     type="tel" 
                     placeholder="Phone Number*" 
                     className="flex-1 bg-transparent px-4 py-4 outline-none placeholder:text-gray-400 font-medium text-gray-900 w-full"
                   />
                 </div>
               </div>

               {/* Select a Date/Time Slot section */}
               <div className="mt-8 pt-8 border-t-2 border-gray-100">
                 <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                   <h3 className="text-xl font-black text-gray-900 flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
                     <Calendar className="w-5 h-5 text-purple-600 shrink-0" /> Pick a Time
                   </h3>
                   
                   {/* Timezone Switcher */}
                   <div className="flex items-center justify-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 w-full sm:w-auto">
                     {isEditingTimezone ? (
                       <select
                         value={timezone}
                         onChange={(e) => {
                           setTimezone(e.target.value);
                           setIsEditingTimezone(false);
                         }}
                         onBlur={() => setIsEditingTimezone(false)}
                         className="bg-white rounded px-2 py-1 outline-none focus:ring-2 focus:ring-purple-500 font-bold text-purple-700 shadow-sm w-full sm:w-auto"
                         autoFocus
                       >
                         {TIMEZONES.map(tz => (
                           <option key={tz} value={tz}>{tz}</option>
                         ))}
                       </select>
                     ) : (
                       <div className="flex items-center gap-2 whitespace-nowrap">
                         <span className="hidden sm:inline">Timezone:</span>
                         <button 
                           type="button" 
                           onClick={() => setIsEditingTimezone(true)}
                           className="font-bold text-purple-700 hover:text-purple-800 transition-colors border-b border-purple-200 hover:border-purple-500"
                         >
                           {timezone}
                         </button>
                       </div>
                     )}
                   </div>
                 </div>

                 {/* Dates */}
                 <div className="flex justify-center xl:justify-start gap-3 sm:gap-4 mb-8 flex-wrap">
                   {DATES.map((date) => {
                     const isActive = selectedDate === date.day;
                     return (
                       <button
                         key={date.day}
                         type="button"
                         onClick={() => setSelectedDate(date.day)}
                         className={`w-[70px] sm:w-[80px] h-[80px] sm:h-[90px] rounded-2xl flex flex-col items-center justify-center transition-all duration-200 border-2 ${
                           isActive 
                             ? 'bg-purple-600 text-white border-purple-600 shadow-[0_8px_20px_-6px_rgba(147,51,234,0.4)] scale-105' 
                             : 'bg-white border-gray-100 text-gray-500 hover:border-purple-200 hover:bg-purple-50'
                         }`}
                       >
                         <span className={`text-xs sm:text-sm uppercase font-bold tracking-wider ${isActive ? 'text-purple-200' : 'text-gray-400'}`}>
                           {date.month}
                         </span>
                         <span className="text-2xl sm:text-3xl font-black mt-0.5">
                           {date.day}
                         </span>
                       </button>
                     );
                   })}
                 </div>

                 {/* Times */}
                 <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                   {TIME_SLOTS.map((time) => {
                     const isActive = selectedTime === time;
                     return (
                       <button
                         key={time}
                         type="button"
                         onClick={() => setSelectedTime(time)}
                         className={`py-3 sm:py-3.5 rounded-xl text-sm font-bold transition-all border-2 ${
                           isActive
                             ? 'bg-purple-600 text-white border-purple-600 shadow-md scale-105'
                             : 'bg-gray-50 text-gray-500 border-gray-100 hover:border-purple-200 hover:bg-white hover:text-purple-700'
                         }`}
                       >
                         {time}
                       </button>
                     );
                   })}
                 </div>
               </div>

               <button 
                 type="submit"
                 className="w-full bg-blue-600 text-white mt-10 py-5 rounded-2xl font-black text-lg sm:text-xl uppercase tracking-widest shadow-[0_8px_0px_#1e3a8a] flex items-center justify-center gap-3 hover:bg-blue-500 transition-all active:translate-y-2 active:shadow-[0_0px_0px_#1e3a8a]"
               >
                 Book My Free Trial <ArrowRight className="w-6 h-6" />
               </button>
             </form>
             </>
            )}
           </div>
        </div>

      </motion.div>
    </div>
  );
}
