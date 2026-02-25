import React from 'react';

export const Founder = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center gap-8">
            <div className="w-48 h-48 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" 
                alt="Founder" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-4 block">The Architect</span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">“To help businesses scale using systems, not stress.”</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I don't build websites. I build revenue engines. My mission is to bridge the gap between high-level automation technology and high-growth businesses worldwide.
              </p>
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">OA</div>
                <div>
                  <p className="text-slate-900 dark:text-white font-bold">Orquestra Architect</p>
                  <p className="text-slate-500 text-sm">Founder & Growth Partner</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center gap-8">
            <div className="w-48 h-48 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&q=80&w=400&h=400" 
                alt="Architect 2" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-4 block">The Strategist</span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">“Data-driven decisions are the bedrock of sustainable growth.”</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I help businesses find their north star metric. We focus on ROI, data, and predictability to create a clear path to success.
              </p>
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">OS</div>
                <div>
                  <p className="text-slate-900 dark:text-white font-bold">Orquestra Strategist</p>
                  <p className="text-slate-500 text-sm">Data & Systems Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
