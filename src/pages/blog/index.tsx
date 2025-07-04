import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogPreview from '../../components/BlogPreview';

export default function Blog() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
} 