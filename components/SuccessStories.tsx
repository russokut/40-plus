
import React from 'react';

interface Story {
  name: string;
  age: number;
  task: string;
  result: string;
  quote: string;
}

const stories: Story[] = [
  {
    name: 'Алексей',
    age: 44,
    task: '22 года стажа, пачка в день',
    result: 'Не курит 8 месяцев, поднялся на Оштен',
    quote: 'Руслан не давал волшебных таблеток. Мы просто разобрали, зачем я тянусь к зажигалке, когда прихожу домой. Первый поход был тяжелым, но именно там я понял, что легкие могут дышать иначе.'
  },
  {
    name: 'Сергей',
    age: 41,
    task: 'Лишний вес, работа 12 часов в сутки',
    result: 'Минус 12 кг, вернулся в трейлраннинг',
    quote: 'Я думал, в 40+ форма — это про залы и диеты. Руслан показал, как встроить 20 минут активности в мой график без насилия над собой. Сейчас энергии больше, чем было в 30.'
  },
  {
    name: 'Марина',
    age: 47,
    task: 'Хронический стресс, одышка',
    result: 'Прошла 4 нестандартных маршрута по Адыгее',
    quote: 'Искала покоя. В походах с Русланом нет гонки за вершинами. Есть тихие тропы и честный разговор. Курить бросила сама через месяц после первой вылазки в горы — просто стало мешать.'
  }
];

const SuccessStories: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Те, кто уже в пути</h2>
          <p className="text-zinc-400 max-w-xl">
            Я был лишь проводником. Основную работу эти люди проделали сами. Здесь нет «чудес», только методика и дисциплина.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xl font-bold text-zinc-100">{story.name},</span>
                  <span className="text-zinc-500">{story.age} года</span>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex gap-2 text-sm">
                    <span className="text-zinc-500">Было:</span>
                    <span className="text-zinc-300">{story.task}</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-orange-500 font-semibold italic">Итог:</span>
                    <span className="text-zinc-100">{story.result}</span>
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute -top-4 -left-2 text-4xl text-zinc-800 font-serif">“</span>
                  <p className="text-zinc-400 text-sm leading-relaxed italic relative z-10">
                    {story.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
