import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BenefitGrid from '../components/BenefitGrid';
import AboutTeaser from '../components/AboutTeaser';
import ServicesList from '../components/ServicesList';
import CommunitySpotlight from '../components/CommunitySpotlight';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import BlogPreview from '../components/BlogPreview';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
        <section className="mb-16"><Hero /></section>
        <section className="mb-16"><BenefitGrid /></section>
        <section className="mb-16"><AboutTeaser /></section>
        <section className="mb-16"><ServicesList /></section>
        <section className="mb-16"><CommunitySpotlight /></section>
        <section className="mb-16"><TestimonialsCarousel /></section>
        <section className="mb-16"><BlogPreview /></section>
      </main>
      <Footer />
    </>
  );
} 