import React from 'react';
import { LogoCarousel } from '../components/LogoCarousel';
import { DiscoveryCTA } from '../components/DiscoveryCTA';
import { Hero } from './home-sections/Hero';
import { Problem } from './home-sections/Problem';
import { System } from './home-sections/System';
import { Process } from './home-sections/Process';
import { Qualification } from './home-sections/Qualification';
import { AuditForm } from './home-sections/AuditForm';
import { Testimonials } from './home-sections/Testimonials';
import { Portfolio } from './home-sections/Portfolio';
import { Founder } from './home-sections/Founder';

export const Home = () => {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <Problem />
      <System />
      <DiscoveryCTA id="discovery" />
      <Process />
      <Qualification />
      <Testimonials />
      <Portfolio />
      <AuditForm />
      <DiscoveryCTA />
      <Founder />
    </>
  );
};
