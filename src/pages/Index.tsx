import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VantaBackground from '../components/VantaBackground';
import TypedHeading from '../components/TypedHeading';
import CTAButton from '../components/CTAButton';
import ContactInfo from '../components/ContactInfo';
import ChatContactForm from '../components/ChatContactForm';

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
        {/* Logo component removed */}
        
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
        
        <div className="features-container">
          <div 
            className="feature-box" 
            data-aos="fade-right" 
            data-aos-duration="1000" 
            data-aos-delay="1000"
          >
            <div className="feature-icon text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v8"/>
                <path d="m4.93 10.93 1.41 1.41"/>
                <path d="M2 18h2"/>
                <path d="M20 18h2"/>
                <path d="m19.07 10.93-1.41 1.41"/>
                <path d="M22 22H2"/>
                <path d="m16 6-4 4-4-4"/>
                <path d="M16 18a4 4 0 0 0-8 0"/>
              </svg>
            </div>
            <h3 className="feature-title">Automatización</h3>
            <p className="feature-desc">Optimización de procesos mediante flujos automatizados que ahorran tiempo y reducen errores.</p>
          </div>
          
          
          <div 
            className="feature-box" 
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-delay="1200"
          >
            <div className="feature-icon text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a7 7 0 0 0-7 7"/>
                <path d="M12 2v7l4.2 4.2"/>
                <circle cx="12" cy="9" r="7"/>
                <path d="m21 16-4.6-4.6"/>
                <path d="M12 16a7 7 0 0 0 7-7"/>
                <path d="M3 16h18"/>
                <path d="M3 20h18"/>
              </svg>
            </div>
            <h3 className="feature-title">Desarrollo Rápido</h3>
            <p className="feature-desc">Soluciones de software empresarial implementadas en tiempo récord con herramientas No Code.</p>
          </div>
          
          <div 
            className="feature-box" 
            data-aos="fade-left" 
            data-aos-duration="1000" 
            data-aos-delay="1400"
          >
            <div className="feature-icon text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a8 8 0 0 0-8 8c0 13 8 12 8 12s8 1 8-12a8 8 0 0 0-8-8Z"/>
                <path d="M12 13V8"/>
                <path d="M12 16v.01"/>
              </svg>
            </div>
            <h3 className="feature-title">IA Avanzada</h3>
            <p className="feature-desc">Integración de Inteligencia Artificial para análisis predictivo y toma de decisiones estratégicas.</p>
          </div>
        </div>
        
        <div 
          className="current-position" 
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-delay="1000"
        >
          Actualmente lidero el departamento de desarrollo de AI en 
          <span className="company-name text-white font-bold text-2xl ml-2 pulse-animation">Aquí hay Marketing.</span>
        </div>
        
        <div className="main-cta-section">
          <ChatContactForm />
          <CTAButton />
        </div>
        
        <ContactInfo />
      </div>
    </div>
  );
};

export default Index;
