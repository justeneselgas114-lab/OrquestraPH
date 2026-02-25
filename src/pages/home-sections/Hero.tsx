import React from 'react';
import { ArrowRight, ShieldCheck, Target, Users, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../../components/Button';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Background Image & Elements */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
          alt="Modern Office Background" 
          className="w-full h-full object-cover opacity-10 dark:opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-slate-950 via-transparent to-white dark:to-slate-950" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/15 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-wider mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Now accepting 3 new global partners for March
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto"
        >
          Automate 80% of Your Follow-Ups and Book <span className="text-blue-500">15–30 Qualified Appointments</span> Every Month.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We build automated client acquisition systems for high-growth businesses who are ready to scale without hiring more staff.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto group" onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Claim Your Free Audit
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('system')?.scrollIntoView({ behavior: 'smooth' })}>
            See How It Works
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 pt-10 border-t border-slate-800/50"
        >
          <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mb-8">Built for high-growth industries</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 dark:invert-0 invert">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
              <ShieldCheck className="w-6 h-6 text-blue-500" /> SERVICES
            </div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
              <Target className="w-6 h-6 text-blue-500" /> SALES TEAMS
            </div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
              <Users className="w-6 h-6 text-blue-500" /> AGENCIES
            </div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
              <TrendingUp className="w-6 h-6 text-blue-500" /> CONSULTANTS
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
