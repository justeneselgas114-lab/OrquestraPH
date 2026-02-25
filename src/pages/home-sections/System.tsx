import React from 'react';
import { Target, MessageSquare, ShieldCheck, Calendar, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeading } from '../../components/SectionHeading';
import { Button } from '../../components/Button';

export const System = () => {
  const steps = [
    { title: "Capture", icon: <Target />, desc: "Ads & Organic traffic funneled into a single entry point." },
    { title: "Nurture", icon: <MessageSquare />, desc: "Instant AI-driven response within 30 seconds." },
    { title: "Qualify", icon: <ShieldCheck />, desc: "Automated filtering of tire-kickers and low-budget leads." },
    { title: "Book", icon: <Calendar />, desc: "Self-service booking into your calendar. No back-and-forth." },
    { title: "Close", icon: <Zap />, desc: "You show up to a call with a pre-sold, qualified prospect." },
    { title: "Retarget", icon: <TrendingUp />, desc: "Automated follow-ups for those who didn't book." }
  ];

  return (
    <section id="system" className="scroll-mt-24 py-24 bg-slate-50 dark:bg-slate-900 px-6 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="The Solution">
          The Automated Revenue Engine
        </SectionHeading>
        
        <div className="relative mt-20">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 shadow-xl">
                  {React.isValidElement(step.icon) && React.cloneElement(step.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                </div>
                <div className="bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 w-full">
                  <h4 className="text-slate-900 dark:text-white font-bold mb-2">Step {i + 1}: {step.title}</h4>
                  <p className="text-slate-500 dark:text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 bg-blue-600 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">We don’t sell software.</h3>
            <p className="text-blue-100 opacity-90">We build high-performance revenue systems that work while you sleep.</p>
          </div>
          <Button variant="secondary" size="lg" onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Build My Engine
          </Button>
        </div>
      </div>
    </section>
  );
};
