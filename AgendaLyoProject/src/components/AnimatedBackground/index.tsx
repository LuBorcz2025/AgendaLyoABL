import './index.css';
import { memo, useState } from 'react';
import type { CSSProperties } from 'react';

const SNACKS = [
  // Osso
  `
    <svg width="32" height="16" viewBox="0 0 32 16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="4" r="4" fill="rgba(255,209,102,.6)"/>
      <circle cx="4" cy="12" r="4" fill="rgba(255,209,102,.6)"/>
      <circle cx="28" cy="4" r="4" fill="rgba(255,209,102,.6)"/>
      <circle cx="28" cy="12" r="4" fill="rgba(255,209,102,.6)"/>
      <rect x="6" y="5" width="20" height="6" rx="3" fill="rgba(255,209,102,.6)"/>
    </svg>
  `,

  // Peixe
  `
    <svg width="32" height="18" viewBox="0 0 32 18" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="14" cy="9" rx="12" ry="7" fill="rgba(62,198,255,.5)"/>
      <polygon points="28,9 32,3 32,15" fill="rgba(62,198,255,.5)"/>
      <circle cx="6" cy="8" r="1.5" fill="rgba(255,255,255,.5)"/>
    </svg>
  `,

  // Estrela
  `
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7"
        fill="rgba(92,240,212,.55)"
      />
    </svg>
  `,

  // Pata
  `
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="17" rx="7" ry="5" fill="rgba(196,127,255,.6)"/>
      <circle cx="5" cy="10" r="3" fill="rgba(196,127,255,.6)"/>
      <circle cx="11" cy="7" r="3" fill="rgba(196,127,255,.6)"/>
      <circle cx="17" cy="7" r="3" fill="rgba(196,127,255,.6)"/>
      <circle cx="21" cy="11" r="2.5" fill="rgba(196,127,255,.6)"/>
    </svg>
  `,
];

function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function createSnacks() {
  return Array.from({ length: 40 }, (_, index) => ({
    id: index,
    svg: SNACKS[Math.floor(Math.random() * SNACKS.length)],
    left: random(0, 100),
    top: random(0, 100),
    duration: random(6, 16),
    delay: -random(0, 10),
    opacity: random(0.2, 0.6),
    rotation: random(-60, 60),
  }));
}

function AnimatedBackground() {
  // A função só roda na primeira montagem; depois o valor fica fixo
  const [snacks] = useState(createSnacks);

  return (
    <div className="animated-background">
      <div className="snacks-layer">
        {snacks.map((snack) => (
          <div
            key={snack.id}
            className="snack"
            style={
              {
                left: `${snack.left}%`,
                top: `${snack.top}%`,
                '--dur': `${snack.duration}s`,
                '--d1': `${snack.delay}s`,
                '--op': snack.opacity,
                '--rot': `${snack.rotation}deg`,
              } as CSSProperties
            }
            dangerouslySetInnerHTML={{ __html: snack.svg }}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(AnimatedBackground);