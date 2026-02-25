import React from 'react';
import { Cpu } from 'lucide-react';
import { SectionHeading } from '../../components/SectionHeading';

export const Process = () => {
  const processes = [
    { title: "Audit & Strategy", desc: "We map your current mess and design a clean, automated path to revenue." },
    { title: "Funnel & CRM Setup", desc: "We build the infrastructure. No more leads lost in Messenger." },
    { title: "AI Integration", desc: "We deploy AI agents that qualify leads and handle FAQs 24/7." },
    { title: "Launch & Optimize", desc: "We flip the switch and monitor data to squeeze out every drop of ROI." }
  ];

  return (
    <section id="process" className="scroll-mt-24 py-24 bg-white dark:bg-slate-950 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-12">
              {processes.map((p, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-500 font-mono font-bold">
                    0{i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{p.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading subtitle="The Workflow" centered={false}>
              Systematized. <br />
              <span className="text-blue-500">Predictable.</span> <br />
              Professional.
            </SectionHeading>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
              We follow a rigorous 4-step deployment process to ensure your automation isn't just "cool"—it's profitable.
            </p>
            <div className="p-1 bg-gradient-to-br from-blue-500 to-blue-900 rounded-2xl">
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Cpu className="text-blue-500 w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-slate-900 dark:text-white font-bold">System Architect</h5>
                    <p className="text-slate-500 dark:text-slate-500 text-xs">Deployment Status: ACTIVE</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                    <span>DATABASE SYNC</span>
                    <span className="text-blue-500">100%</span>
                  </div>
                  <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-full" />
                  </div>
                  <div className="flex justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                    <span>AI TRAINING</span>
                    <span className="text-blue-500">94%</span>
                  </div>
                  <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[94%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
