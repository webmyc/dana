import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-deep-forest-teal text-soft-cream py-8 px-4 flex flex-col items-center justify-center">
      <h2 className="font-heading text-xl uppercase tracking-wider mb-2">Dana Dragomirescu</h2>
      <p className="font-body text-base mb-4 text-center max-w-xl">
        &copy; {new Date().getFullYear()} Dana Dragomirescu. All rights reserved. Authentic Connection.
      </p>
      <div className="flex gap-4 mt-2">
        {/* Add social or icon links here if needed */}
      </div>
    </footer>
  );
} 