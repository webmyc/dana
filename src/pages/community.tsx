import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommunitySpotlight from '../components/CommunitySpotlight';
import Partners from '../components/Partners';

export default function Community() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <CommunitySpotlight />
        <Partners />
      </main>
      <Footer />
    </>
  );
} 