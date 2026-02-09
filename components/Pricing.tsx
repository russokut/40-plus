import React from 'react';
import { SERVICES } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.2em] mb-4">Стоимость участия</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Простая система из 3 шагов</h3>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Никакой путаницы. Мы идем от простого к сложному, закрепляя результат на каждом этапе. 
            Начните с консультации — она станет фундаментом вашей трансформации.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className={`relative flex flex-col p-8 rounded-3xl border ${
                service.id === 'CONSULTATION' 
                ? 'bg-zinc-900/80 border-orange-600/30' 
                : 'bg-zinc-900/40 border-zinc-800'
              } hover:border-zinc-700 transition-all group`}
            >
              {service.step && (
                <span className="inline-block text-[10px] font-bold tracking-widest text-orange-500 uppercase mb-4">
                  {service.step}
                </span>
              )}
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold">{service.title}</h4>
                <span className="text-3xl">{service.icon}</span>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">{service.price}</span>
                {service.id !== 'CONSULTATION' && <span className="text-zinc-500 text-sm ml-2">/ курс</span>}
              </div>
              <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-10 flex-1">
                {service.features?.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-zinc-300">
                    <svg className="w-4 h-4 text-orange-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  service.id === 'CONSULTATION'
                  ? 'bg-orange-600 text-white hover:bg-orange-500'
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                Выбрать этот шаг
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-orange-950/20 border border-orange-900/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="text-lg font-bold text-zinc-100">Полный курс трансформации (10 недель)</div>
            <p className="text-zinc-400 text-sm mt-1">Все шаги включены + приоритетная поддержка + восхождение</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-3xl font-bold text-orange-500">21 000 ₽</div>
            <button 
              onClick={() => document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-zinc-950 rounded-xl font-bold hover:bg-zinc-100 transition-all text-sm"
            >
              Записаться сразу
            </button>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-zinc-600 uppercase tracking-widest max-w-2xl mx-auto">
          ВАЖНО: Мои услуги не заменяют медицинскую помощь. При наличии хронических заболеваний согласуйте нагрузку с врачом.
        </p>
      </div>
    </section>
  );
};

export default Pricing;