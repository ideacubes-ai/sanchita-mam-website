import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCcw } from 'lucide-react';

const levels = [
  { target: 'CAT', icon: '🐱', options: ['C', 'A', 'T', 'M', 'S'].sort(() => Math.random() - 0.5) },
  { target: 'DOG', icon: '🐶', options: ['D', 'O', 'G', 'B', 'P'].sort(() => Math.random() - 0.5) },
  { target: 'SUN', icon: '☀️', options: ['S', 'U', 'N', 'M', 'R'].sort(() => Math.random() - 0.5) },
  { target: 'PIG', icon: '🐷', options: ['P', 'I', 'G', 'T', 'L'].sort(() => Math.random() - 0.5) },
  { target: 'BUG', icon: '🐛', options: ['B', 'U', 'G', 'M', 'C'].sort(() => Math.random() - 0.5) },
  { target: 'BAT', icon: '🦇', options: ['B', 'A', 'T', 'C', 'H'].sort(() => Math.random() - 0.5) },
  { target: 'FOX', icon: '🦊', options: ['F', 'O', 'X', 'B', 'T'].sort(() => Math.random() - 0.5) },
  { target: 'COW', icon: '🐮', options: ['C', 'O', 'W', 'M', 'N'].sort(() => Math.random() - 0.5) },
  { target: 'HAT', icon: '🎩', options: ['H', 'A', 'T', 'P', 'C'].sort(() => Math.random() - 0.5) },
  { target: 'BUS', icon: '🚌', options: ['B', 'U', 'S', 'T', 'F'].sort(() => Math.random() - 0.5) },
  { target: 'CAR', icon: '🚗', options: ['C', 'A', 'R', 'B', 'T'].sort(() => Math.random() - 0.5) },
  { target: 'PEN', icon: '🖊️', options: ['P', 'E', 'N', 'M', 'C'].sort(() => Math.random() - 0.5) },
  { target: 'BED', icon: '🛏️', options: ['B', 'E', 'D', 'R', 'T'].sort(() => Math.random() - 0.5) },
  { target: 'MUG', icon: '☕', options: ['M', 'U', 'G', 'B', 'C'].sort(() => Math.random() - 0.5) },
  { target: 'CUP', icon: '🥤', options: ['C', 'U', 'P', 'B', 'T'].sort(() => Math.random() - 0.5) },
  { target: 'BOX', icon: '📦', options: ['B', 'O', 'X', 'F', 'C'].sort(() => Math.random() - 0.5) },
  { target: 'ANT', icon: '🐜', options: ['A', 'N', 'T', 'M', 'B'].sort(() => Math.random() - 0.5) },
  { target: 'OWL', icon: '🦉', options: ['O', 'W', 'L', 'P', 'M'].sort(() => Math.random() - 0.5) },
  { target: 'RAT', icon: '🐀', options: ['R', 'A', 'T', 'C', 'B'].sort(() => Math.random() - 0.5) },
  { target: 'LOG', icon: '🪵', options: ['L', 'O', 'G', 'D', 'P'].sort(() => Math.random() - 0.5) },
  { target: 'WEB', icon: '🕸️', options: ['W', 'E', 'B', 'N', 'T'].sort(() => Math.random() - 0.5) },
  { target: 'LIP', icon: '👄', options: ['L', 'I', 'P', 'T', 'S'].sort(() => Math.random() - 0.5) },
  { target: 'MAP', icon: '🗺️', options: ['M', 'A', 'P', 'T', 'C'].sort(() => Math.random() - 0.5) },
  { target: 'NET', icon: '🥅', options: ['N', 'E', 'T', 'P', 'M'].sort(() => Math.random() - 0.5) },
  { target: 'TOP', icon: '🏔️', options: ['T', 'O', 'P', 'C', 'H'].sort(() => Math.random() - 0.5) },
  { target: 'FIN', icon: '🦈', options: ['F', 'I', 'N', 'P', 'T'].sort(() => Math.random() - 0.5) },
];

export default function WordBuilderGame() {
  const [levelIdx, setLevelIdx] = useState(0);
  const [placed, setPlaced] = useState<string[]>([]);
  const [won, setWon] = useState(false);
  const [shake, setShake] = useState(false);

  const currentLevel = levels[levelIdx];

  const handleSelect = (letter: string, index: number) => {
    if (placed.length < currentLevel.target.length && !won) {
      const newPlaced = [...placed, letter];
      setPlaced(newPlaced);
      
      if (newPlaced.join('') === currentLevel.target) {
        setWon(true);
      } else if (newPlaced.length === currentLevel.target.length) {
        setShake(true);
        setTimeout(() => {
          setShake(false);
          setPlaced([]);
        }, 1000);
      }
    }
  };

  const nextLevel = () => {
    setLevelIdx((prev) => (prev + 1) % levels.length);
    setPlaced([]);
    setWon(false);
  };

  return (
    <section className="bg-white rounded-[40px] shadow-[12px_12px_0px_#bfdbfe] border-4 border-blue-100 p-8 md:p-12 relative overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-blue-900 tracking-tight mb-2">Word Builder</h2>
        <p className="text-blue-800/70 font-medium">Spell the word correctly to win!</p>
      </div>

      <div className="flex flex-col items-center gap-10">
        <div className="text-8xl md:text-9xl drop-shadow-xl animate-bounce-slow">
          {currentLevel.icon}
        </div>
        
        <motion.div 
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="flex gap-4"
        >
          {Array.from({ length: currentLevel.target.length }).map((_, i) => (
            <div 
              key={i} 
              className={`w-16 h-20 md:w-20 md:h-24 rounded-2xl flex items-center justify-center text-4xl md:text-5xl font-black
                ${placed[i] ? 'bg-orange-500 text-white border-b-4 border-orange-600 shadow-[0_4px_10px_rgba(249,115,22,0.4)] transform -translate-y-1' : 'bg-slate-100 text-slate-300 border-4 border-dashed border-slate-300'}
                transition-all duration-300`}
            >
              {placed[i] || ''}
            </div>
          ))}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {currentLevel.options.map((letter, i) => {
            const isUsed = placed.includes(letter) && Math.random() < 0.5; // rudimentary check, ideally track indices
            // Let's not disable buttons for now to keep it simple, just allow clicking them.
            return (
              <button
                key={`${letter}-${i}`}
                onClick={() => handleSelect(letter, i)}
                disabled={won}
                className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black transition-all
                  ${won ? 'opacity-50 cursor-not-allowed' : 'bg-white text-blue-600 border-2 border-blue-200 shadow-[4px_4px_0px_#bfdbfe] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#bfdbfe] active:translate-y-1 active:shadow-[0px_0px_0px_#bfdbfe]'}`}
              >
                {letter}
              </button>
            )
          })}
        </div>

        <AnimatePresence>
          {won && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-[36px]"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-4xl font-black text-green-600 tracking-tight mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8" />
                Awesome Job!
                <Sparkles className="w-8 h-8" />
              </h3>
              <button 
                onClick={nextLevel}
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-black text-xl shadow-[6px_6px_0px_#166534] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#166534] active:translate-y-2 active:shadow-none transition-all flex items-center gap-2"
              >
                Next Word <RefreshCcw className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
