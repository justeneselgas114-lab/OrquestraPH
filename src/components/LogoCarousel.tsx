import React from 'react';
import { 
  Globe, 
  ShoppingBag, 
  MessageSquare, 
  Code, 
  Layers, 
  Server, 
  GraduationCap, 
  Share2, 
  Target, 
  Users, 
  BarChart, 
  PieChart 
} from 'lucide-react';

const logos = [
  { name: "WordPress", icon: <Globe className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: "Shopify", icon: <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: "GoHighLevel", icon: <MessageSquare className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: "Laravel", icon: <Code className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: "Vue.js", icon: <Layers className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: "NestJS", icon: <Server className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: "Moodle LMS", icon: <GraduationCap className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: "SMM", icon: <Share2 className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: "Google Ads", icon: <Target className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: "Meta Ads", icon: <Users className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: "Data Analytics", icon: <BarChart className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: "Power BI", icon: <PieChart className="w-5 h-5 md:w-6 md:h-6" /> }
];

export const LogoCarousel = () => {
  // Duplicate the logos array to ensure seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-slate-500 text-xs font-mono uppercase tracking-[0.2em]">
          Powered by Industry-Leading Technologies
        </p>
      </div>

      <div className="relative flex items-center">
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        
        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        {/* Carousel Track */}
        <div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state:paused]">
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center px-8 md:px-16 py-4 transition-transform duration-300 hover:scale-110 cursor-default group"
            >
              <div className="flex items-center gap-3">
                <div className="text-blue-500 group-hover:text-blue-600 transition-colors">
                  {logo.icon}
                </div>
                <span className="text-slate-600 font-bold text-lg md:text-2xl tracking-tight whitespace-nowrap group-hover:text-slate-900 transition-colors">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: flex;
          width: max-content;
        }
      `}} />
    </section>
  );
};
