
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { sendMessageToRuslan } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Привет. Я Руслан. Прошел путь от 20 лет курения до соло-восхождений на Кавказе. Чем могу помочь: бросить курить, вернуть форму после 40 или сходить в горы? Расскажи, что тебя привело.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await sendMessageToRuslan([...messages, userMsg]);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <section id="chat" className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Напиши мне</h2>
          <p className="text-zinc-400">Коротко опиши свою ситуацию. Я отвечу прямо сейчас.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[600px]">
          {/* Header */}
          <div className="p-4 border-b border-zinc-800 flex items-center bg-zinc-900/50">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center font-bold">Р</div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-zinc-900 rounded-full"></div>
            </div>
            <div className="ml-3">
              <div className="font-bold text-sm">Руслан</div>
              <div className="text-xs text-zinc-500">На связи</div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-orange-600 text-white rounded-tr-none' 
                      : 'bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 text-zinc-400 px-5 py-3 rounded-2xl rounded-tl-none animate-pulse">
                  Руслан печатает...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-zinc-800 bg-zinc-900/50">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Твое сообщение..."
                className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-600 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-zinc-100 text-zinc-950 px-6 py-3 rounded-xl font-bold hover:bg-white transition-all disabled:opacity-50"
              >
                Отправить
              </button>
            </div>
            <div className="mt-3 text-[10px] text-zinc-600 text-center uppercase tracking-widest">
              Личные консультации • Краснодар & Online
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatWidget;
