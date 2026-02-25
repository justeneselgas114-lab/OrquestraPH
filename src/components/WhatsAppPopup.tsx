import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLabel, setShowLabel] = useState(true);
  const phoneNumber = "09638296973";
  const message = "Hello! I'm interested in learning more about OrquestraPH.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCloseLabel = () => {
    setShowLabel(false);
    // Show label again after 10 seconds
    setTimeout(() => {
      setShowLabel(true);
    }, 10000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Online status label */}
      <AnimatePresence>
        {showLabel && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ 
              opacity: 0, 
              scale: 0.8,
              x: -10,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            className="bg-white text-slate-900 px-3 py-2 rounded-lg shadow-lg border border-slate-100 text-sm font-medium whitespace-nowrap relative"
          >
            {/* Close button */}
            <button
              onClick={handleCloseLabel}
              className="absolute top-2 right-2 p-1 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-10"
            >
              <X className="w-3 h-3 text-slate-600" />
            </button>
            <div className="flex items-center gap-2 pr-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>We're online - Ready to answer!</span>
            </div>
            {/* Connection line to WhatsApp button */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-gradient-to-r from-slate-300 to-green-500 origin-left"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsAppClick}
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
