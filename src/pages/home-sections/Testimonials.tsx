import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeading } from '../../components/SectionHeading';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO, Jenkins Service Solutions",
      comment: "Before Nexus, we were losing 60% of our leads because we couldn't reply fast enough. Since implementing their Automated Revenue Engine, our appointment booking rate increased by 400%, and we closed $150k in additional sales in just 3 months.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      stats: "+400% Bookings"
    },
    {
      name: "Dr. Michael Chen",
      role: "Director, Chen Wellness Group",
      comment: "The AI chatbot Nexus built for us is a game-changer. It handles client inquiries at 2 AM and books them directly into our calendar. Our monthly revenue has stabilized, and we've seen a 35% increase in high-ticket service cases.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      stats: "35% Revenue Lift"
    },
    {
      name: "Elena Rodriguez",
      role: "Senior Partner, Global Service Partners",
      comment: "Automation was a scary word for us, but Nexus made it simple. Their system now handles all our initial lead nurturing. My team only talks to qualified prospects now. Our ROI on ad spend jumped from 2x to 7x in the first quarter.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
      stats: "7x ROAS"
    }
  ];

  return (
    <section id="testimonials" className="scroll-mt-24 py-24 bg-white dark:bg-slate-950 px-6 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Social Proof" centered={true}>
          Real Systems. <span className="text-blue-500">Real Revenue</span>.
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl relative group hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-blue-500" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-blue-500 text-blue-500" />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-300 italic mb-8 leading-relaxed relative z-10">
                "{t.comment}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-800 group-hover:border-blue-500 transition-colors">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <span className="text-blue-500 font-mono text-xs font-bold uppercase tracking-wider">Impact</span>
                <span className="bg-blue-600/10 text-blue-400 text-[10px] font-bold px-2 py-1 rounded border border-blue-500/20">
                  {t.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Join <span className="text-slate-900 dark:text-white font-bold">50+ global businesses</span> who have automated their revenue growth.
          </p>
        </div>
      </div>
    </section>
  );
};
