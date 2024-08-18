import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import { Skill } from '../components/Skill';
import HeroSection2 from '../components/HeroSection2';
import Particles from '../components/particles';
import { Achievement } from '../components/Achievement';

export default function Home() {
  return (
    <div>
      <Particles/>
      <HeroSection2 />
      <AboutSection />
      <Skill/>
      <ServicesSection />
      <ProjectsSection />
      <Achievement/>
      <TestimonialsSection />

      <ContactBanner />
    </div>
  );
}
