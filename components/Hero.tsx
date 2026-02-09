import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-mountain-gradient overflow-hidden">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span>Набор в группу открыт</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter uppercase">
            Верни себе <br/> 
            <span className="text-orange-500">силу гор</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-300 mb-12 leading-relaxed font-light max-w-xl">
            Брось курить, начни дышать и соверши своё первое восхождение на Кавказе. Без пафоса. Без пластырей. На основе реального опыта трансформации в 40+.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#chat" 
              className="px-10 py-5 bg-orange-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm text-center hover:bg-orange-500 transition-all shadow-2xl shadow-orange-900/40 hover:-translate-y-1"
            >
              Бесплатный разбор
            </a>
            <a 
              href="#about" 
              className="px-10 py-5 bg-zinc-900/50 backdrop-blur-xl text-white rounded-2xl font-black uppercase tracking-widest text-sm text-center border border-zinc-800 hover:bg-zinc-800 transition-all hover:-translate-y-1"
            >
              Моя история
            </a>
          </div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-12 border-t border-zinc-800/50 pt-10 max-w-2xl">
            <div className="group">
              <div className="text-4xl font-black text-zinc-100 group-hover:text-orange-500 transition-colors">20+</div>
              <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Лет стажа курения позади</div>
            </div>
            <div className="group">
              <div className="text-4xl font-black text-zinc-100 group-hover:text-orange-500 transition-colors">2867м</div>
              <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Соло на вершину Фишт</div>
            </div>
            <div className="group hidden md:block">
              <div className="text-4xl font-black text-zinc-100 group-hover:text-orange-500 transition-colors">100%</div>
              <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Честный личный опыт</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative side element */}
      <div className="absolute right-0 bottom-0 top-0 w-1/4 bg-gradient-to-l from-orange-600/5 to-transparent hidden lg:block"></div>
    </section>
  );
};

export default Hero;