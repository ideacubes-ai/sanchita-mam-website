import InteractiveGame from '../components/InteractiveGame';
import WordBuilderGame from '../components/WordBuilderGame';

export default function GamesPage() {
  return (
    <div className="flex-1 bg-blue-50 relative overflow-hidden py-16 md:py-24">
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/60 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-200/40 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-16 relative">
          <h1 className="text-5xl md:text-6xl font-black leading-tight text-blue-900 tracking-tight">
            Mind-Blowing <span className="text-orange-500">Phonics Games</span>
          </h1>
          <p className="text-xl text-blue-800/70 font-medium max-w-2xl mx-auto leading-relaxed">
            Learning to read has never been this fun! Explore our interactive games designed to build confidence and fluency.
          </p>
        </div>
        
        <div className="space-y-12">
          <InteractiveGame />
          <WordBuilderGame />
        </div>
      </div>
    </div>
  );
}
