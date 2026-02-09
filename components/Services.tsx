import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-zinc-950 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">Инструменты перемен</h2>
          <h3 className="text-4xl md:text-5xl font-black leading-tight uppercase">С чем мы работаем</h3>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-zinc-900/30 p-10 rounded-[2.5rem] border border-zinc-800 hover:border-orange-500/30 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center text-3xl mb-10 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-zinc-400 leading-relaxed text-base mb-10 flex-1">
                {service.description}
              </p>
              <button 
                onClick={() => document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 rounded-xl border border-zinc-800 group-hover:border-zinc-100 group-hover:bg-zinc-100 group-hover:text-zinc-950 transition-all font-bold text-xs uppercase tracking-widest"
              >
                Узнать подробнее
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-12 bg-zinc-900/20 rounded-[3rem] border border-zinc-800/50 flex flex-col md:flex-row items-center gap-10">
           <div className="text-5xl opacity-20">"</div>
           <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed italic text-center md:text-left">
             Я не спаситель. Я проводник. Моя сила — в личном опыте, а не в сертификатах. Я знаю, как тяжело дышать на подъеме, когда в легких 20 лет дыма, и знаю, как это изменить.
           </p>
           <div className="shrink-0 text-center md:text-left">
             <div className="font-black text-white text-lg uppercase tracking-wider">Руслан</div>
             <div className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mt-1">Твой проводник</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;