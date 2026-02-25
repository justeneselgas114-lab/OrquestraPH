import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "09638296973";
  const message = "Hello! I'm interested in learning more about OrquestraPH.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000); // Show tooltip after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-4 bg-white text-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-100 max-w-[250px] relative"
          >
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">OP</span>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Need help?</p>
                <p className="text-xs text-slate-500">Chat with our team on WhatsApp for quick answers.</p>
              </div>
            </div>
            {/* Triangle pointer */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-slate-100 transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowTooltip(true)}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)] transition-shadow relative group"
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Pulsing rings */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 group-hover:animate-ping"></div>
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 group-hover:animate-ping" style={{ animationDelay: '0.2s' }}></div>
      </motion.button>
    </div>
  );
};
