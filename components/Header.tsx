import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center font-bold text-white group-hover:rotate-6 transition-transform">Р</div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight uppercase leading-none">Руслан</span>
            <span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Трансформация 40+</span>
          </div>
        </a>
        
        <nav className="hidden md:flex space-x-10 text-xs font-bold uppercase tracking-widest text-zinc-400">
          <a href="#services" className="hover:text-orange-500 transition-colors">Услуги</a>
          <a href="#results" className="hover:text-orange-500 transition-colors">Результаты</a>
          <a href="#about" className="hover:text-orange-500 transition-colors">Обо мне</a>
          <a href="#pricing" className="hover:text-orange-500 transition-colors">Прайс</a>
        </nav>
        
        <a 
          href="#chat" 
          className="bg-zinc-100 text-zinc-950 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg hover:shadow-white/10"
        >
          Начать диалог
        </a>
      </div>
    </header>
  );
};

export default Header;