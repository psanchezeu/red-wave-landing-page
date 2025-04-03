
import React, { useEffect, useRef, useState } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';

const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x000000,
          shininess: 24.00,
          waveHeight: 20.00,
          waveSpeed: 0.50,
          zoom: 0.65,
          highlightColor: 0x8A0303,
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
