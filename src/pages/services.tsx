import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesGrid from '../components/ServicesGrid';
import BenefitGrid from '../components/BenefitGrid';

export default function Services() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <ServicesGrid />
        <BenefitGrid />
      </main>
      <Footer />
    </>
  );
} 