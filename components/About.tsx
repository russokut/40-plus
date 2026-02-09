import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800&h=1000" 
            alt="Руслан в горах" 
            className="relative rounded-3xl shadow-2xl border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[600px] w-full"
          />
          <div className="absolute -bottom-8 -right-8 bg-orange-600 p-8 rounded-2xl shadow-xl hidden lg:block border border-orange-500/20 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-black mb-1">40+</div>
            <div className="text-sm font-bold uppercase tracking-wider leading-tight">Лучший возраст<br/>для старта</div>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.2em] mb-4">Кто я такой</h2>
          <h3 className="text-4xl font-bold mb-8 leading-tight">Твой проводник в мире<br/>без дыма и слабости</h3>
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              Днем я проектирую системы на базе ИИ, а на выходных — поднимаюсь на вершины, которые раньше казались недостижимыми. 
            </p>
            <p>
              Когда тебе за 40, кажется, что одышка — это норма, а сигарета — единственный способ снять стресс. Я прошел через это: 20 лет стажа, зависимость и ощущение «упущенного времени».
            </p>
            <p>
              Я бросил сам. Без пластырей и гипноза. Просто через понимание механики привычек и возвращение любви к движению. Моя задача — передать тебе эту систему, чтобы ты прошел этот путь быстрее и легче.
            </p>
            <div className="flex items-center gap-4 pt-6 text-zinc-100 font-semibold">
              <span className="w-12 h-[1px] bg-orange-600"></span>
              Давай напишем твою историю победы вместе.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;