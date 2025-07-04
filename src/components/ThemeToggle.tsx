import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);
  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="ml-4 px-2 py-1 rounded bg-earth-brass text-light-neutral hover:bg-neon-lemon hover:text-deep-green transition"
      aria-label="Toggle dark mode"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
} 