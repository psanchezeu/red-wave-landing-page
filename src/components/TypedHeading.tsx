
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedHeading = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typed.current = new Typed(typedRef.current, {
        strings: [
          "DESARROLLO NO CODE",
          "AUTOMATIZACIÓN AVANZADA",
          "INTELIGENCIA ARTIFICIAL",
          "TRANSFORMACIÓN DIGITAL"
        ],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        startDelay: 500,
        backDelay: 2000,
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <div className="typed-container" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
      <h2 className="text-2xl md:text-3xl text-white mb-2 font-light">SOY PEPE SÁNCHEZ, EXPERTO EN</h2>
      <h1 className="typed-text">
        <span ref={typedRef}></span>
      </h1>
    </div>
  );
};

export default TypedHeading;
