import React from 'react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SectionHeading = ({ children, subtitle, centered = true }: { children: React.ReactNode, subtitle?: string, centered?: boolean }) => (
  <div className={cn('mb-16', centered ? 'text-center' : 'text-left')}>
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-4 block"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
    >
      {children}
    </motion.h2>
  </div>
);
