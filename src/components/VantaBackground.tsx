
import React, { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.50,
          scaleMobile: 1.00,
          color: 0xFFFFFF,           // Changed from 0x8A0303 to white
          backgroundColor: 0x000000,
          points: 12.00,
          maxDistance: 25.00,
          spacing: 18.00,
          showDots: false
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="vanta-container"></div>;
};

export default VantaBackground;
