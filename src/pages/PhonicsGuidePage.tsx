import { motion } from 'motion/react';
import { 
  Sparkles, 
  Music, 
  Puzzle, 
  Volume2, 
  BookOpen, 
  PenTool, 
  Brain, 
  Trophy, 
  Gamepad2, 
  Heart,
  Baby,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PhonicsGuidePage() {
  return (
    <div className="flex-1 bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-100 via-pink-50 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[15%] text-6xl opacity-30 pointer-events-none"
        >
          🚀
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 left-[10%] text-6xl opacity-30 pointer-events-none"
        >
          ⭐
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full text-purple-600 font-black text-sm uppercase tracking-widest shadow-sm mb-6 border-2 border-purple-100"
          >
            <Sparkles className="w-5 h-5 text-yellow-500" /> Guide for Parents
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-950 leading-tight tracking-tight mb-6"
          >
            Phonics for Parents: Unlocking Your Child's <span className="text-purple-600 relative inline-block">
              Reading Superpower!
              <svg className="absolute w-[105%] h-3 md:h-5 text-yellow-400 -bottom-1 -left-2 z-[-1]" viewBox="0 0 100 20" preserveAspectRatio="none">
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
            As parents, we all want our children to succeed, especially when it comes to reading. You might have heard the term "Phonics" thrown around, and wondered, <strong>"What exactly is Phonics, and how will it help my child?"</strong> You're in the right place!
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 space-y-20">
        
        {/* Section 1: What is Phonics? */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center transform -rotate-6 shadow-sm border-2 border-orange-200">
              <Puzzle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-950">
              What is Phonics? <span className="block sm:inline text-orange-500">The Building Blocks</span>
            </h2>
          </div>
          <div className="prose prose-lg text-gray-600 font-medium max-w-none">
            <p>
              Imagine learning to play a musical instrument. You wouldn't just try to play entire songs without knowing the individual notes, right? Phonics is very similar for reading!
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl my-6">
              <strong className="text-blue-900 text-xl">Phonics is a way of teaching children to read by connecting sounds with letters.</strong> 
              <p className="mt-2 text-blue-800">It helps children understand that the letters they see on a page represent specific sounds. When they learn these connections, they can then blend these sounds together to "sound out" words and read them.</p>
            </div>
            <p>Think of it this way:</p>
            <ul className="space-y-4 my-6 list-none pl-0">
              {['The letter \'c\' makes the /k/ sound.', 'The letter \'a\' makes the /a/ sound (as in apple).', 'The letter \'t\' makes the /t/ sound.'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border-2 border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-black text-xl shrink-0">
                    {item.match(/'(.*?)'/)?.[1]}
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl text-center p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-200 font-bold text-gray-800">
              /k/ + /a/ + /t/ = <span className="text-orange-600 text-3xl mx-2">"cat"!</span> 🐱
              <br/>
              <span className="text-base font-medium text-gray-500 mt-2 block">This process of sounding out words is called <strong>decoding</strong> [1].</span>
            </p>
          </div>
        </motion.div>

        {/* Section 2: How Phonics Helps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center transform rotate-6 shadow-sm border-2 border-pink-200">
              <Star className="w-8 h-8 fill-current" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-950">
              How Phonics Helps Your Child
            </h2>
          </div>
          <p className="text-lg text-gray-600 font-medium mb-10">
            Phonics isn't just about sounding out words; it's a foundational skill that boosts several key areas of your child's reading and writing journey:
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <BenefitCard 
              icon={<Volume2 className="w-6 h-6" />}
              color="bg-blue-500"
              lightColor="bg-blue-50"
              title="1. Decoding Words"
              subtitle="Reading New Words with Confidence"
              description="It gives children a tool to read words they haven't seen before instead of guessing. This builds independence in reading."
              example="If they know sounds for 'j', 'u', 'm', 'p', they can blend them to read 'jump'."
            />
            <BenefitCard 
              icon={<BookOpen className="w-6 h-6" />}
              color="bg-emerald-500"
              lightColor="bg-emerald-50"
              title="2. Reading Fluency"
              subtitle="Reading Smoothly and Expressively"
              description="As decoding becomes faster naturally, they read more smoothly, with good pace and expression, focusing less on sounding out each word."
            />
            <BenefitCard 
              icon={<PenTool className="w-6 h-6" />}
              color="bg-purple-500"
              lightColor="bg-purple-50"
              title="3. Spelling"
              subtitle="Becoming a Better Writer"
              description="Phonics is a two-way street! When they hear a word, they can break it down into its sounds and write the letters."
              example="For 'dog', they hear /d/, /o/, /g/ and write 'd', 'o', 'g'."
            />
            <BenefitCard 
              icon={<Brain className="w-6 h-6" />}
              color="bg-orange-500"
              lightColor="bg-orange-50"
              title="4. Reading Comprehension"
              subtitle="Understanding What They Read"
              description="By making decoding easier, Phonics frees up mental energy to focus on the story and meaning of what they are reading."
            />
          </div>
        </motion.div>

        {/* Section 3: What Studies Say */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-blue-900 rounded-[2.5rem] p-8 sm:p-12 text-white relative overflow-hidden"
        >
          {/* Background decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-yellow-400 text-yellow-900 rounded-2xl flex items-center justify-center transform -rotate-3 shadow-sm border-2 border-yellow-300 shrink-0">
                <Trophy className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                What the Studies Say: <span className="text-yellow-400">Phonics Works!</span>
              </h2>
            </div>
            <p className="text-blue-100 text-lg mb-8 font-medium">
              Decades of research have consistently shown that systematic and explicit phonics instruction is highly effective in teaching children to read.
            </p>
            <ul className="space-y-4">
              <StudyItem title="Significant Improvement" desc="Studies indicate that systematic phonics instruction significantly improves children's word recognition, spelling, and reading comprehension." />
              <StudyItem title="Early Intervention" desc="It is most effective when it begins early, in kindergarten or first grade. It's crucial for students at risk for reading difficulties." />
              <StudyItem title="Foundation for Literacy" desc="Phonics helps build a strong foundation for reading and writing skills, essential for all future learning." />
            </ul>
          </div>
        </motion.div>

        {/* Section 4: How You Can Help */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center transform rotate-6 shadow-sm border-2 border-pink-200">
              <Heart className="w-8 h-8 fill-current" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-950">
              How You Can Help at Home
            </h2>
          </div>
          <p className="text-lg text-gray-600 font-medium mb-8">
            You don't need to be a teacher to support your child's phonics learning! Here are some simple, fun ways:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <TipCard icon={<Music />} title="Play Sound Games" desc="Ask your child, 'What's the first sound you hear in mom?' or 'What word do these sounds make: /p/ /i/ /g/?'" />
            <TipCard icon={<BookOpen />} title="Read Aloud Together" desc="Point to words as you read, and occasionally sound out simple words together." />
            <TipCard icon={<Baby />} title="Focus on Sounds" desc="While knowing letter names is good, knowing the sounds each letter makes is key for phonics." />
            <TipCard icon={<PenTool />} title="Practice Spelling" desc="Encourage them to sound out simple words as they try to write them." />
            <TipCard icon={<Gamepad2 />} title="Make it Fun!" desc="Use magnetic letters, alphabet puzzles, or phonics apps and games to keep them engaged." className="sm:col-span-2" />
          </div>
        </motion.div>

        {/* Conclusion */}
        <div className="text-center bg-orange-50 p-8 sm:p-12 rounded-[2.5rem] border-4 border-orange-100">
          <h2 className="text-3xl font-black text-blue-950 mb-4">Empowering Your Child to Read</h2>
          <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto mb-8">
            Phonics is a powerful tool that gives children the ability to decode words, read fluently, spell accurately, and enjoy what they read. You can play a vital role in unlocking their reading superpower!
          </p>
          <Link 
            to="/book-trial"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-[0_6px_0px_#1e3a8a] hover:bg-blue-500 active:translate-y-2 active:shadow-[0_0px_0px_#1e3a8a] transition-all"
          >
            Book a Free Trial Class Now
          </Link>
        </div>

        {/* References */}
        <div className="text-sm text-gray-400 font-medium pb-20">
          <h3 className="font-bold text-gray-500 mb-2 uppercase tracking-wider">References</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Reading Rockets - Basics: Phonics and Decoding</li>
            <li>Education Endowment Foundation - Phonics</li>
            <li>Libby Klinner Teaching - What is Phonics? A Guide for Parents</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

function BenefitCard({ icon, color, lightColor, title, subtitle, description, example }: any) {
  return (
    <div className={`p-6 rounded-3xl border-2 border-gray-100 shadow-sm hover:shadow-xl transition-shadow bg-white relative overflow-hidden group`}>
      <div className={`absolute top-0 right-0 w-32 h-32 ${lightColor} rounded-full mix-blend-multiply filter blur-2xl opacity-50 transition-transform group-hover:scale-150`} />
      <div className="relative z-10">
        <div className={`w-12 h-12 ${color} text-white rounded-xl flex items-center justify-center shadow-md mb-6 transform -rotate-3 group-hover:rotate-0 transition-transform`}>
          {icon}
        </div>
        <h3 className="text-xl font-black text-blue-950 mb-1">{title}</h3>
        <p className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">{subtitle}</p>
        <p className="text-gray-600 font-medium leading-relaxed">{description}</p>
        {example && (
          <div className={`mt-4 p-4 rounded-xl ${lightColor} border border-gray-100`}>
            <p className="text-sm text-gray-800 font-semibold"><span className="uppercase text-xs tracking-wider opacity-60 block mb-1">Real Example</span> {example}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function StudyItem({ title, desc }: { title: string, desc: string }) {
  return (
    <li className="flex gap-4">
      <div className="w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center shrink-0 mt-1 border border-blue-600">
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
      </div>
      <div>
        <h4 className="text-white font-bold text-xl mb-1">{title}</h4>
        <p className="text-blue-200 font-medium leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}

function TipCard({ icon, title, desc, className = "" }: any) {
  return (
    <div className={`bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:border-purple-200 transition-colors flex items-start gap-4 ${className}`}>
      <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0 shadow-sm transform -rotate-3">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-black text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 font-medium">{desc}</p>
      </div>
    </div>
  );
}
