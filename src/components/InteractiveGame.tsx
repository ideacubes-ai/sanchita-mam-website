import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, PlayCircle } from 'lucide-react';

const alphabet = [
  { letter: "A", word: "Apple", emoji: "🍎", color: "bg-red-400" },
  { letter: "B", word: "Bear", emoji: "🐻", color: "bg-amber-400" },
  { letter: "C", word: "Cat", emoji: "🐱", color: "bg-orange-400" },
  { letter: "D", word: "Dog", emoji: "🐶", color: "bg-blue-400" },
  { letter: "E", word: "Elephant", emoji: "🐘", color: "bg-gray-400" },
  { letter: "F", word: "Fox", emoji: "🦊", color: "bg-orange-500" },
  { letter: "G", word: "Giraffe", emoji: "🦒", color: "bg-yellow-500" },
  { letter: "H", word: "Horse", emoji: "🐴", color: "bg-amber-500" },
  { letter: "I", word: "Ice", emoji: "🧊", color: "bg-cyan-300" },
  { letter: "J", word: "Jelly", emoji: "🍮", color: "bg-pink-400" },
  { letter: "K", word: "Koala", emoji: "🐨", color: "bg-gray-500" },
  { letter: "L", word: "Lion", emoji: "🦁", color: "bg-yellow-600" },
  { letter: "M", word: "Monkey", emoji: "🐵", color: "bg-amber-600" },
  { letter: "N", word: "Nest", emoji: "🪹", color: "bg-stone-500" },
  { letter: "O", word: "Owl", emoji: "🦉", color: "bg-stone-600" },
  { letter: "P", word: "Pig", emoji: "🐷", color: "bg-pink-500" },
  { letter: "Q", word: "Queen", emoji: "👑", color: "bg-yellow-400" },
  { letter: "R", word: "Rabbit", emoji: "🐰", color: "bg-zinc-400" },
  { letter: "S", word: "Snail", emoji: "🐌", color: "bg-emerald-500" },
  { letter: "T", word: "Tiger", emoji: "🐯", color: "bg-orange-600" },
  { letter: "U", word: "Umbrella", emoji: "☔", color: "bg-purple-500" },
  { letter: "V", word: "Volcano", emoji: "🌋", color: "bg-red-500" },
  { letter: "W", word: "Whale", emoji: "🐳", color: "bg-cyan-500" },
  { letter: "X", word: "X-ray", emoji: "🦴", color: "bg-indigo-400" },
  { letter: "Y", word: "Yak", emoji: "🐂", color: "bg-stone-700" },
  { letter: "Z", word: "Zebra", emoji: "🦓", color: "bg-neutral-600" },
];

export default function InteractiveGame() {
  const [activeLetter, setActiveLetter] = useState<number | null>(null);

  const handlePlaySound = (index: number) => {
    setActiveLetter(index);
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(alphabet[index].word);
      window.speechSynthesis.speak(utterance);
    }
    setTimeout(() => setActiveLetter(null), 2000);
  };

  return (
    <section className="bg-white rounded-[40px] shadow-[12px_12px_0px_#bfdbfe] border-4 border-blue-100 p-8 md:p-12 relative overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-blue-900 tracking-tight mb-2">Tap 'n Reveal</h2>
        <p className="text-blue-800/70 font-medium">Tap the cards to hear the sound!</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {alphabet.map((item, idx) => (
          <button
            key={item.letter}
            onClick={() => handlePlaySound(idx)}
            className={`relative aspect-[3/4] rounded-2xl overflow-hidden border-4 flex flex-col items-center justify-center transition-all duration-300
              ${activeLetter === idx 
                ? item.color + ' border-white shadow-none translate-y-1' 
                : 'bg-white border-blue-100 hover:border-blue-200 shadow-[6px_6px_0px_#dbeafe] hover:shadow-[8px_8px_0px_#bfdbfe] hover:-translate-y-1 active:translate-y-1 active:shadow-none'
              }
            `}
          >
            <AnimatePresence mode="wait">
              {activeLetter === idx ? (
                <motion.div
                  key="revealed"
                  initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  exit={{ scale: 0.5, opacity: 0, rotateY: -90 }}
                  className="text-center"
                >
                  <div className="text-6xl md:text-7xl mb-4 drop-shadow-md">{item.emoji}</div>
                  <div className="font-black text-lg md:text-xl text-white uppercase tracking-wider">{item.word}</div>
                  <Volume2 className="w-6 h-6 text-white/80 mx-auto mt-2" />
                </motion.div>
              ) : (
                <motion.div
                  key="hidden"
                  initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
                  className="text-center"
                >
                  <div className="text-6xl md:text-8xl font-black text-blue-600 drop-shadow-md">
                    {item.letter}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>
    </section>
  );
}
