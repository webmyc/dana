import React from 'react';

export const Fern = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <path d="M16 28C16 18 16 8 16 4" stroke="#A67C52" strokeWidth={2} strokeLinecap="round"/>
    <path d="M16 16C12 14 8 12 4 12" stroke="#145D52" strokeWidth={2} strokeLinecap="round"/>
    <path d="M16 20C12 18 8 16 4 16" stroke="#145D52" strokeWidth={2} strokeLinecap="round"/>
    <path d="M16 24C12 22 8 20 4 20" stroke="#145D52" strokeWidth={2} strokeLinecap="round"/>
    <path d="M16 16C20 14 24 12 28 12" stroke="#A67C52" strokeWidth={2} strokeLinecap="round"/>
    <path d="M16 20C20 18 24 16 28 16" stroke="#A67C52" strokeWidth={2} strokeLinecap="round"/>
    <path d="M16 24C20 22 24 20 28 20" stroke="#A67C52" strokeWidth={2} strokeLinecap="round"/>
  </svg>
);

export const Moon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <path d="M24 16A8 8 0 1 1 16 8c0 4.418 3.582 8 8 8z" fill="#A67C52"/>
    <circle cx={16} cy={16} r={15} stroke="#145D52" strokeWidth={2}/>
  </svg>
);

export const Circle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <circle cx={16} cy={16} r={14} fill="#A67C52" stroke="#145D52" strokeWidth={2}/>
  </svg>
);

export const Leaf = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <path d="M16 28C24 20 28 12 16 4C4 12 8 20 16 28Z" fill="#A67C52" stroke="#145D52" strokeWidth={2}/>
  </svg>
); 