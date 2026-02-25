import React from 'react';
import { Music } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-slate-50 border-t border-slate-200 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <img src="https://i.postimg.cc/hGvyPKfc/Purple-Modern-Artificial-Intelligence-Logo.png" alt="OrquestraPH Logo" className="w-12 h-12 rounded object-cover shadow-sm" />
          <span className="text-lg font-bold text-slate-900 tracking-tighter">Orquestra<span className="text-indigo-500">PH</span></span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-slate-500 text-sm">
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>

        <p className="text-slate-400 text-xs font-mono">
          © {new Date().getFullYear()} OrquestraPH. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};
