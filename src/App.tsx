/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { WhatsAppPopup } from './components/WhatsAppPopup';
import { TimeTriggeredPopup } from './components/TimeTriggeredPopup';
import { UrgencyNotification } from './components/UrgencyNotification';

export default function App() {
  const [showTimePopup, setShowTimePopup] = useState(false);
  const [showUrgencyNotification, setShowUrgencyNotification] = useState(false);

  useEffect(() => {
    // Set timer to show popup after 20 seconds for every visitor
    console.log('Setting 20-second timer for popup...');
    const timer = setTimeout(() => {
      console.log('20 seconds elapsed - showing popup');
      setShowTimePopup(true);
    }, 20000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCloseTimePopup = () => {
    console.log('Closing popup');
    setShowTimePopup(false);
    // Show urgency notification after closing main popup
    setTimeout(() => {
      console.log('Showing urgency notification');
      setShowUrgencyNotification(true);
    }, 500);
  };

  const handleUrgencyNotificationClick = () => {
    setShowUrgencyNotification(false);
    setShowTimePopup(true);
  };

  const handleUrgencyNotificationClose = () => {
    setShowUrgencyNotification(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-500/30 transition-colors duration-300">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <WhatsAppPopup />
      <TimeTriggeredPopup isOpen={showTimePopup} onClose={handleCloseTimePopup} />
      <UrgencyNotification 
        isVisible={showUrgencyNotification}
        onClick={handleUrgencyNotificationClick}
        onClose={handleUrgencyNotificationClose}
      />
    </div>
  );
}
