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
    // Check if popup was already shown in the last 24 hours
    const lastShown = localStorage.getItem('timePopupLastShown');
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    console.log('Last shown:', lastShown);
    console.log('Time since last shown:', lastShown ? (now - parseInt(lastShown)) / 1000 / 60 / 60 : 'Never');

    if (lastShown && (now - parseInt(lastShown)) < twentyFourHours) {
      console.log('Popup shown recently - skipping');
      return; // Don't show popup if it was shown within last 24 hours
    }

    // Set timer to show popup after 15 seconds (15,000 milliseconds)
    console.log('Setting 15-second timer for popup...');
    const timer = setTimeout(() => {
      console.log('15 seconds elapsed - showing popup');
      setShowTimePopup(true);
      localStorage.setItem('timePopupLastShown', Date.now().toString());
    }, 15000); // 15 seconds

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
