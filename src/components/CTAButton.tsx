
import React from 'react';
import { Button } from '@/components/ui/button';

const CTAButton = () => {
  return (
    <div className="cta-container" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1200">
      <Button 
        className="cta-button hvr-grow px-8 py-6 text-xl bg-white hover:bg-white/90 text-black rounded-md shadow-lg shadow-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-white/30"
        onClick={() => window.open('mailto:psanchez@aquihaymarketing.es', '_blank')}
      >
        ¿QUIERES TRANSFORMAR TU NEGOCIO CON IA? <span className="block mt-1 font-bold">¡HABLEMOS AHORA!</span>
      </Button>
    </div>
  );
};

export default CTAButton;
