import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Open+Sans:wght@400;600&family=Oswald:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-light-neutral text-[#333] dark:bg-deep-green dark:text-light-neutral font-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 