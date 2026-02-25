import React from 'react';
import { Button } from './Button';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

interface DiscoveryCTAProps {
  className?: string;
  id?: string;
}

export const DiscoveryCTA: React.FC<DiscoveryCTAProps> = ({ className, id }) => {
  const scrollToAudit = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={id} className={`scroll-mt-24 py-20 px-6 bg-blue-600 relative overflow-hidden ${className}`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
            <Calendar className="text-white w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Ready to Automate Your Business?
          </h2>
          
          <div className="space-y-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-blue-600 hover:bg-slate-100 border-none shadow-xl px-10 py-6 text-lg"
              onClick={(e) => {
                e.preventDefault();
                scrollToAudit();
              }}
            >
              Book a Discovery Call
            </Button>
            <p className="text-blue-100 text-sm font-medium">
              Let’s review your current business process and see how automation can improve it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
