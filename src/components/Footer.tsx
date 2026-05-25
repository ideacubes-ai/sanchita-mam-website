import { BookOpen, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Metrics (Matching Design HTML exactly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b-2 border-blue-800 pb-12 mb-12 items-center">
          <div className="flex gap-8 md:gap-12 flex-wrap text-white">
            <div className="flex flex-col">
              <span className="text-orange-400 font-black text-3xl">1:1</span>
              <span className="text-xs font-bold uppercase opacity-60 tracking-wider">Personal Attention</span>
            </div>
            <div className="flex flex-col">
              <span className="text-orange-400 font-black text-3xl">200+</span>
              <span className="text-xs font-bold uppercase opacity-60 tracking-wider">Games & Quizzes</span>
            </div>
            <div className="flex flex-col">
              <span className="text-orange-400 font-black text-3xl">100%</span>
              <span className="text-xs font-bold uppercase opacity-60 tracking-wider">Parent Rated</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6 md:justify-end text-white">
            <div className="text-right">
              <p className="font-black text-base md:text-xl leading-tight uppercase tracking-tighter italic">"My 5yo is reading books alone!"</p>
              <p className="text-xs opacity-60 font-bold uppercase mt-1">— David K, Parent</p>
            </div>
            <div className="w-14 h-14 rounded-full border-4 border-orange-400 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 text-orange-400 fill-orange-400" />
            </div>
          </div>
        </div>

        {/* Traditional Footer */}
        <div className="grid md:grid-cols-4 gap-8 text-blue-200">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white text-2xl font-black uppercase tracking-tighter">
              <BookOpen className="w-8 h-8 text-orange-500 fill-orange-500" />
              <div className="flex flex-col gap-0 leading-none">
                <span>Sanchita Mam's</span>
                <span className="text-orange-500 text-lg">Reading Classes</span>
              </div>
            </div>
            <p className="max-w-xs text-sm font-medium leading-relaxed">
              Making reading magical for kids everywhere through live interactive classes and joyful learning resources.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm font-bold">
              <li><a href="/#classes" className="hover:text-orange-400 transition-colors">Our Classes</a></li>
              <li><a href="/games" className="hover:text-orange-400 transition-colors">Games</a></li>
              <li><a href="/#resources" className="hover:text-orange-400 transition-colors">Free Resources</a></li>
              <li><a href="/#pricing" className="hover:text-orange-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 text-sm font-bold">
              <li className="hover:text-orange-400 transition-colors cursor-pointer"><a href="mailto:09sanchitaghosh@gmail.com">09sanchitaghosh@gmail.com</a></li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer"><a href="https://wa.me/919831820191" target="_blank" rel="noopener noreferrer">+91 9831820191</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t-2 border-blue-800 text-xs font-bold uppercase tracking-widest text-center flex flex-col md:flex-row justify-between items-center gap-4 text-blue-400">
          <p>&copy; {new Date().getFullYear()} Sanchita Mam's Reading Classes.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
