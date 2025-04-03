
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VantaBackground from '../components/VantaBackground';
import Logo from '../components/Logo';
import TypedHeading from '../components/TypedHeading';
import CTAButton from '../components/CTAButton';
import ContactInfo from '../components/ContactInfo';

const Index = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="landing-page">
      <VantaBackground />
      
      <div className="content-container">
        <Logo />
        
        <TypedHeading />
        
        <div 
          className="intro-text" 
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-delay="800"
        >
          Desarrollo soluciones rápidas y eficientes mediante herramientas No Code, 
          automatización avanzada e Inteligencia Artificial para transformar procesos empresariales.
        </div>
        
        <div 
          className="current-position" 
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-delay="1000"
        >
          Actualmente lidero el departamento de desarrollo de AI en 
          <span className="text-[#8A0303] font-bold ml-2">AI Human Copilot.</span>
        </div>
        
        <CTAButton />
        
        <ContactInfo />
      </div>
    </div>
  );
};

export default Index;
