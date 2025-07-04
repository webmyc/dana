import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesList from '../components/ServicesList';
import BenefitGrid from '../components/BenefitGrid';

export default function Services() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <ServicesList />
        <BenefitGrid />
      </main>
      <Footer />
    </>
  );
} 