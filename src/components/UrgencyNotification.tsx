import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface UrgencyNotificationProps {
  isVisible: boolean;
  onClick: () => void;
  onClose: () => void;
}

export const UrgencyNotification: React.FC<UrgencyNotificationProps> = ({ 
  isVisible, 
  onClick, 
  onClose 
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ 
            type: "spring", 
            damping: 20, 
            stiffness: 300,
            duration: 0.4
          }}
          className="fixed bottom-20 right-6 z-[90]"
        >
          {/* Compact Urgency Button */}
          <div 
            className="relative group cursor-pointer"
            onClick={onClick}
          >
            {/* Pulse Animation Background */}
            <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-75"></div>
            
            {/* Main Button */}
            <div className="relative bg-gradient-to-r from-red-600 to-orange-600 rounded-full p-3 shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-3xl">
              {/* Alert Icon */}
              <AlertCircle className="w-6 h-6 text-white" />
            </div>

            {/* Hover Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl"
            >
              <div className="flex flex-col gap-1">
                <span className="text-red-400 font-bold">⚠️ Limited Time!</span>
                <span>Only 1 Partner Spot Left</span>
              </div>
              {/* Arrow */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-slate-900"></div>
            </motion.div>

            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-100 transition-colors"
            >
              <X className="w-3 h-3 text-slate-600" />
            </button>

            {/* Urgency Badge */}
            <div className="absolute -top-2 -right-2 bg-yellow-400 text-slate-900 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
              !
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-orange-600/30 rounded-full blur-xl -z-10"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
