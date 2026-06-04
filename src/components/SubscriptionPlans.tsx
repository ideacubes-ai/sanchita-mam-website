import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const plans = [
  {
    name: 'Introductory',
    classes: '24 Classes',
    duration: '3 Months',
    pricing: {
      inr: { current: '₹24,000', original: '₹36,000', perClass: '₹1,000/class' },
      usd: { current: '$288', original: '$432', perClass: '$12/class' },
    },
    features: [
      'Certificate (Level 1)',
      '3 Grand Challenges',
      '3 Workshops',
      '1 Portfolio Project',
    ],
    recommended: false,
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    name: 'Basic',
    classes: '48 Classes',
    duration: '6 Months',
    pricing: {
      inr: { current: '₹48,000', original: '₹72,000', perClass: '₹1,000/class' },
      usd: { current: '$576', original: '$864', perClass: '$12/class' },
    },
    features: [
      'Certificate (2 Levels)',
      '6 Grand Challenges',
      '6 Workshops',
      '2 Portfolio Projects',
    ],
    recommended: true,
    badge: 'Most Preferred',
    color: 'bg-orange-50',
    borderColor: 'border-orange-500',
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
  },
  {
    name: 'Advanced',
    classes: '96 Classes',
    duration: '1 Year',
    pricing: {
      inr: { current: '₹83,000', original: '₹124,500', perClass: '₹864/class' },
      usd: { current: '$1000', original: '$1500', perClass: '$10/class' },
    },
    features: [
      'Certificate (4 Levels)',
      '12 Grand Challenges',
      '12 Workshops',
      '4 Portfolio Projects',
    ],
    recommended: false,
    badge: 'Best Value',
    color: 'bg-purple-50',
    borderColor: 'border-purple-200',
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
  },
];

export default function SubscriptionPlans() {
  const [region, setRegion] = useState<'inr' | 'usd'>('usd');

  return (
    <section id="pricing" className="py-24 bg-purple-50/50 relative overflow-hidden border-t-2 border-purple-100">
      {/* Decorative Blob Backgrounds */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-[100px] opacity-30 pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-400 rounded-full blur-[120px] opacity-20 pointer-events-none translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-xl text-green-700 font-black text-xs md:text-sm uppercase tracking-widest"
          >
            Subscription Plans
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900 tracking-tight"
          >
            Choose the Right <span className="text-orange-500 relative inline-block">
              Plan
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
            Experience our structured phonics course tailored for your child's growth.
          </motion.p>
        </div>

        {/* Region Toggle */}
        <div className="flex justify-center mb-16 px-4">
          <div className="bg-slate-100 p-1.5 rounded-full flex relative shadow-inner w-full max-w-sm md:max-w-md">
            <button
              onClick={() => setRegion('inr')}
              className={`relative z-10 flex-1 py-3 rounded-full text-xs sm:text-sm md:text-base font-bold transition-colors ${region === 'inr' ? 'text-white' : 'text-slate-600 hover:text-slate-900'}`}
            >
              India
            </button>
            <button
              onClick={() => setRegion('usd')}
              className={`relative z-10 flex-1 py-3 rounded-full text-xs sm:text-sm md:text-base font-bold transition-colors ${region === 'usd' ? 'text-white' : 'text-slate-600 hover:text-slate-900'}`}
            >
              International
            </button>
            {/* Animated Background Indicator */}
            <div 
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-blue-600 rounded-full transition-all duration-300 shadow-md ${region === 'inr' ? 'left-1.5' : 'left-[calc(50%+4.5px)]'}`}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-center">
          {plans.map((plan, i) => (
             <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border-4 ${plan.borderColor} shadow-xl ${plan.recommended ? 'md:-translate-y-4 md:scale-105 z-20' : 'z-10'}`}
             >
               {plan.badge && (
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-950 px-4 py-1.5 rounded-full font-black text-xs md:text-sm uppercase tracking-wider whitespace-nowrap shadow-sm border-2 border-white">
                   {plan.badge}
                 </div>
               )}

               <div className="text-center mb-8">
                 <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
                 <div className="flex justify-center items-center gap-2 mb-4">
                   <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-bold text-sm">
                     {plan.classes}
                   </span>
                   <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-bold text-sm">
                     {plan.duration}
                   </span>
                 </div>
                 
                 <div className="mb-2">
                   <span className="text-4xl font-black text-slate-900">
                     {plan.pricing[region].current}
                   </span>
                 </div>
                 <div className="text-slate-500 font-medium line-through mb-1">
                   {plan.pricing[region].original}
                 </div>
                 <div className="text-blue-600 font-bold bg-blue-50 inline-block px-3 py-1 rounded-full text-sm">
                   {plan.pricing[region].perClass}
                 </div>
               </div>

               <div className="space-y-4 mb-8">
                 {plan.features.map((feature, idx) => (
                   <div key={idx} className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                     <span className="text-slate-700 font-medium">{feature}</span>
                   </div>
                 ))}
               </div>

               <button className={`w-full py-4 rounded-xl font-black text-white uppercase tracking-wider transition-all ${plan.buttonColor} shadow-lg active:scale-95`}>
                 Get Started
               </button>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
