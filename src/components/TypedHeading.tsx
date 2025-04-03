
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedHeading = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typed.current = new Typed(typedRef.current, {
        strings: ["Soy Pepe Sánchez, Experto en Desarrollo No Code y Automatización con IA."],
        typeSpeed: 50,
        backSpeed: 0,
        loop: false,
        showCursor: true,
        cursorChar: '|',
        startDelay: 500,
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
      <h1 className="typed-text">
        <span ref={typedRef}></span>
      </h1>
    </div>
  );
};

export default TypedHeading;
