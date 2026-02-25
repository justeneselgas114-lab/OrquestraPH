import React from 'react';
import { Clock, Zap, BarChart3, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeading } from '../../components/SectionHeading';

export const Problem = () => {
  const problems = [
    {
      title: "Manual Follow-Ups",
      desc: "Spending hours manually texting leads who never reply, only to lose them in your inbox.",
      icon: <Clock className="w-6 h-6 text-red-500" />
    },
    {
      title: "Missed Opportunities",
      desc: "Leads coming in at 9 PM aren't touched until 9 AM. By then, they've already messaged your competitor.",
      icon: <Zap className="w-6 h-6 text-red-500" />
    },
    {
      title: "No CRM Visibility",
      desc: "Relying on notebooks or messy spreadsheets. You have no idea which leads are actually ready to buy.",
      icon: <BarChart3 className="w-6 h-6 text-red-500" />
    },
    {
      title: "Owner Bottleneck",
      desc: "You're the CEO, but you're acting like a VA. You can't scale because you're stuck in the weeds.",
      icon: <Users className="w-6 h-6 text-red-500" />
    }
  ];

  return (
    <section id="reality" className="scroll-mt-24 py-24 bg-white dark:bg-slate-950 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-row-2 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading subtitle="The Reality" centered={false}>
              <span className="text-red-500">You’re busy, but you’re not</span> <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">scaling</span>.
            </SectionHeading>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Most businesses treat their sales process like a hobby, not a system. If your revenue depends on you manually checking messages every 10 minutes, you don't have a business—you have a high-stress job.
            </p>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-red-500/30 transition-colors group"
                >
                  <div className="mt-1">{p.icon}</div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold mb-1">{p.title}</h4>
                    <p className="text-slate-500 dark:text-slate-500 text-sm">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full -z-10" />
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-slate-500 font-mono text-xs">PIPELINE_LEAK_REPORT.EXE</span>
              </div>
              <div className="space-y-6">
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    className="h-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]" 
                  />
                </div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-600 dark:text-slate-400">LEAD RESPONSE TIME</span>
                  <span className="text-red-400">85% TOO SLOW</span>
                </div>
                
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '72%' }}
                    viewport={{ once: true }}
                    className="h-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]" 
                  />
                </div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-600 dark:text-slate-400">FOLLOW-UP CONSISTENCY</span>
                  <span className="text-red-400">72% DROPPED</span>
                </div>

                <div className="mt-12 p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-red-400 text-sm font-medium italic">
                    "We're spending $5k/month on ads but only closing 2 deals because our team can't keep up with the messages."
                  </p>
                  <p className="text-slate-500 text-xs mt-2">— Real feedback from a pre-audit business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
