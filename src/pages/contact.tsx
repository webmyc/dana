import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
} 