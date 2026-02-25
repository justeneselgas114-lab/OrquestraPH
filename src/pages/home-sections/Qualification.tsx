import React from 'react';
import { CheckCircle2, ChevronRight, XCircle } from 'lucide-react';
import { SectionHeading } from '../../components/SectionHeading';

export const Qualification = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Pre-Qualification">
          Is This For You?
        </SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl hover:border-blue-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="text-green-500 w-8 h-8" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Who This IS For</h3>
            </div>
            <ul className="space-y-4">
              {[
                "SMEs with 2–50 employees",
                "Annual revenue between $500k–$10M",
                "Businesses ready to scale with systems",
                "Owners who value ROI over 'cheap' setups",
                "Industries: Service-Based, Agencies, SaaS, Sales Teams"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl hover:border-red-500/30 transition-colors opacity-80">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="text-red-500 w-8 h-8" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Who This IS NOT For</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Solopreneurs with no budget",
                "Businesses making under $10k/month",
                "People looking for 'cheap' VA services",
                "Those unwilling to invest in their growth",
                "Businesses with no existing lead flow"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 dark:text-slate-500 line-through">
                  <ChevronRight className="w-5 h-5 text-slate-300 dark:text-slate-700 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
