import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../../components/Button';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const AuditForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: '',
    revenue: '',
    bottleneck: '',
    budget: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section id="audit-form" className="scroll-mt-24 py-24 bg-white px-6 transition-colors duration-300">
        <div className="max-w-3xl mx-auto bg-slate-50 border border-blue-500/30 p-12 rounded-3xl text-center shadow-[0_0_50px_rgba(37,99,235,0.2)]">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-green-500 w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Discovery Call Requested</h2>
          <p className="text-slate-600 text-lg mb-8">
            Our System Architect is reviewing your business profile. You will receive an SMS confirmation shortly.
          </p>
          <div className="p-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl mb-8">
            <p className="text-blue-600 font-bold mb-2">NEXT STEP:</p>
            <p className="text-slate-900">Book your strategy call on the next page to lock in your discovery session.</p>
          </div>
          <Button size="lg" className="w-full" onClick={() => document.getElementById('discovery')?.scrollIntoView({ behavior: 'smooth' })}>Go to Calendar Booking</Button>
        </div>
      </section>
    );
  }

  return (
    <section id="audit-form" className="scroll-mt-24 py-24 bg-white px-6 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Claim Your Free Audit</h2>
          <p className="text-slate-500">Tell us about your business. We'll show you exactly where you're leaking revenue.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-200">
            <motion.div 
              className="h-full bg-blue-600"
              animate={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6">What is your industry?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Service-Based Business', 'Sales-Driven Team', 'Agency / Consulting', 'B2B SaaS', 'E-commerce / Retail', 'Other'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => { setFormData({ ...formData, industry: opt }); nextStep(); }}
                        className={cn(
                          "p-4 rounded-xl border text-left transition-all",
                          formData.industry === opt ? "bg-blue-600 border-blue-500 text-white" : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-400"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Current monthly revenue?</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {['Under $10k', '$10k – $30k', '$30k – $70k', '$70k – $150k', 'Over $150k'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => { setFormData({ ...formData, revenue: opt }); nextStep(); }}
                        className={cn(
                          "p-4 rounded-xl border text-left transition-all",
                          formData.revenue === opt ? "bg-blue-600 border-blue-500 text-white" : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-400"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  <button type="button" onClick={prevStep} className="text-slate-500 text-sm hover:text-slate-900">← Back</button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Biggest bottleneck?</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      'Not enough leads',
                      'Leads don\'t reply to follow-ups',
                      'Too much manual work / No time',
                      'Leads are low quality / Tire-kickers',
                      'No system to track sales pipeline'
                    ].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => { setFormData({ ...formData, bottleneck: opt }); nextStep(); }}
                        className={cn(
                          "p-4 rounded-xl border text-left transition-all",
                          formData.bottleneck === opt ? "bg-blue-600 border-blue-500 text-white" : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-400"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  <button type="button" onClick={prevStep} className="text-slate-500 text-sm hover:text-slate-900 dark:hover:text-white">← Back</button>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Final Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-slate-500 text-xs uppercase font-mono mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-slate-500 text-xs uppercase font-mono mb-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@company.com"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-slate-500 text-xs uppercase font-mono mb-2">Phone Number (For SMS Confirmation)</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-colors"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Processing Data..." : "Schedule My Discovery Call"}
                    </Button>
                  </div>
                  <button type="button" onClick={prevStep} className="text-slate-500 text-sm hover:text-slate-900 dark:hover:text-white">← Back</button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
};
