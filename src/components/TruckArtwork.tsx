import React from 'react';

interface TruckProps {
  className?: string;
  speedMode?: 'cruise' | 'rush' | 'night';
  customText?: string;
}

export const TruckDefs: React.FC = () => {
  return (
    <svg width="0" height="0" className="absolute opacity-0 pointer-events-none">
      <defs>
        <linearGradient id="trl-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fafcff" />
          <stop offset="100%" stopColor="#aab5c9" />
        </linearGradient>
        <linearGradient id="cab-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffa62b" />
          <stop offset="100%" stopColor="#d45a00" />
        </linearGradient>
        <linearGradient id="chr-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#9aa4b8" />
          <stop offset="100%" stopColor="#e8edf6" />
        </linearGradient>
        <linearGradient id="gl-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#27406e" />
          <stop offset="100%" stopColor="#08101f" />
        </linearGradient>
        <linearGradient id="bm-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff0b8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#fff0b8" stopOpacity="0" />
        </linearGradient>

        <g id="wheel-graphic">
          <circle r="28" fill="#0b0c10" />
          <circle r="17" fill="url(#chr-grad)" />
          <circle r="6" fill="#333333" />
          <g fill="#222222">
            <circle cy="-11" r="2.6" />
            <circle cy="11" r="2.6" />
            <circle cx="-11" r="2.6" />
            <circle cx="11" r="2.6" />
          </g>
        </g>

        <g id="truck-master-graphic">
          {/* Headlight beam */}
          <polygon points="708,116 1180,40 1180,220 708,136" fill="url(#bm-grad)" />
          
          {/* Main Trailer */}
          <rect x="10" y="26" width="470" height="146" rx="7" fill="url(#trl-grad)" />
          <rect x="10" y="112" width="470" height="14" fill="#12203d" />
          <rect x="10" y="126" width="470" height="5" fill="#ff8a00" />
          
          {/* Trailer Branding Text */}
          <text x="245" y="86" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="56" fill="#12203d">
            CH <tspan fill="#ff8a00">LOGISTICS</tspan>
          </text>
          <text x="245" y="104" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" fontSize="12" letterSpacing="4" fill="#4a5875">
            GEORGIA · TRUCK DISPATCH
          </text>
          
          <rect x="30" y="172" width="430" height="12" fill="#161b27" />
          <rect x="2" y="138" width="8" height="18" rx="2" fill="#ff2a2a" />
          <rect x="476" y="152" width="22" height="22" fill="#1a1d27" />
          
          {/* Cabin & Hood */}
          <path d="M494 174V60Q494 42 514 42H578Q591 42 599 54L613 78V174Z" fill="url(#cab-grad)" />
          <path d="M508 42L558 14Q582 10 592 24L594 44Z" fill="#c25200" />
          <path d="M556 58H588L606 82H556Z" fill="url(#gl-grad)" />
          
          <rect x="522" y="92" width="62" height="70" rx="5" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
          <rect x="528" y="104" width="14" height="4" rx="2" fill="url(#chr-grad)" />
          
          <path d="M613 174V112Q613 101 626 101H692Q704 101 708 114L712 174Z" fill="url(#cab-grad)" />
          <rect x="692" y="106" width="16" height="58" rx="3" fill="url(#chr-grad)" />
          
          <g stroke="#333333" strokeWidth="1.5">
            <path d="M696 110v50M700 110v50M704 110v50" />
          </g>
          
          <rect x="702" y="119" width="12" height="12" rx="3" fill="#fff6d0" />
          <rect x="690" y="162" width="32" height="12" rx="5" fill="url(#chr-grad)" />
          
          {/* Exhaust Stack */}
          <rect x="598" y="6" width="8" height="98" rx="3" fill="url(#chr-grad)" />
          <rect x="500" y="176" width="92" height="22" rx="11" fill="url(#chr-grad)" />
          
          {/* Smoke particle nodes */}
          <circle className="animate-smoke-1" cx="602" cy="6" r="10" fill="#cfd6e4" />
          <circle className="animate-smoke-2" cx="602" cy="6" r="10" fill="#cfd6e4" />
        </g>
      </defs>
    </svg>
  );
};

export const TruckGraphic: React.FC<TruckProps> = ({ className = 'w-full', speedMode = 'cruise' }) => {
  const wheelAnimClass =
    speedMode === 'rush' ? 'animate-wheel-fast' : speedMode === 'night' ? 'animate-wheel-slow' : 'animate-wheel';

  return (
    <svg viewBox="0 0 740 202" className={className} role="img" aria-label="CH Logistics Truck Driving">
      <use href="#truck-master-graphic" />
      
      {/* Animated Wheel Assemblies */}
      <g transform="translate(90 172)">
        <g className={wheelAnimClass}>
          <use href="#wheel-graphic" />
        </g>
      </g>
      <g transform="translate(154 172)">
        <g className={wheelAnimClass}>
          <use href="#wheel-graphic" />
        </g>
      </g>
      <g transform="translate(528 172)">
        <g className={wheelAnimClass}>
          <use href="#wheel-graphic" />
        </g>
      </g>
      <g transform="translate(586 172)">
        <g className={wheelAnimClass}>
          <use href="#wheel-graphic" />
        </g>
      </g>
      <g transform="translate(662 172)">
        <g className={wheelAnimClass}>
          <use href="#wheel-graphic" />
        </g>
      </g>
    </svg>
  );
};
