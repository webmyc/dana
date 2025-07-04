import React from 'react';
import Image from 'next/image';

const partners = [
  { src: "/assets/partner-holistic-restart.png", href: "https://holisticrestart.com", alt: "Holistic Restart" },
  { src: "/assets/partner-sambure.webp", href: "https://sambure.org", alt: "Sâmbure" },
  { src: "/assets/partner-suuna.png", href: "https://suuna.org", alt: "Suuna" },
  { src: "/assets/partner-urbankid.webp", href: "https://urbankid.ro", alt: "UrbanKid" },
];

export default function Partners() {
  return (
    <div className="flex flex-wrap gap-8 justify-center items-center py-8">
      {partners.map(partner => (
        <a key={partner.href} href={partner.href} target="_blank" rel="noopener" className="grayscale hover:grayscale-0 transition">
          <Image src={partner.src} alt={partner.alt} width={120} height={60} className="object-contain" />
        </a>
      ))}
    </div>
  );
} 