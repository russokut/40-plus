import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import SuccessStories from './components/SuccessStories';
import ChatWidget from './components/ChatWidget';
import About from './components/About';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      <main>
        {/* Захват внимания */}
        <Hero />
        
        {/* Что предлагаем */}
        <Services />
        
        {/* Социальное доказательство */}
        <SuccessStories />
        
        {/* Личность автора и доверие */}
        <About />
        
        {/* Прозрачность цены */}
        <Pricing />
        
        {/* Целевое действие / Конверсия */}
        <ChatWidget />
      </main>
      
      <footer className="py-16 border-t border-zinc-900 bg-zinc-950 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-zinc-400">Р</div>
            <span className="font-bold text-zinc-300 tracking-tight uppercase">Руслан / Трансформация</span>
          </div>
          <div className="text-zinc-500 text-sm mb-6">
            © {new Date().getFullYear()} Все права защищены. Личная методика Руслана.
          </div>
          <div className="text-[10px] text-zinc-800 max-w-2xl mx-auto uppercase tracking-tighter leading-relaxed">
            ВНИМАНИЕ: МАТЕРИАЛЫ САЙТА НОСЯТ ОЗНАКОМИТЕЛЬНЫЙ ХАРАКТЕР. ОБЯЗАТЕЛЬНО ПРОКОНСУЛЬТИРУЙТЕСЬ С ВРАЧОМ ПЕРЕД ИЗМЕНЕНИЕМ ОБРАЗА ЖИЗНИ ИЛИ ОТКАЗОМ ОТ КУРЕНИЯ ПРИ НАЛИЧИИ ХРОНИЧЕСКИХ ЗАБОЛЕВАНИЙ. МЕДИЦИНСКИЕ РЕШЕНИЯ ПРИНИМАЕТ ТОЛЬКО ВРАЧ.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;