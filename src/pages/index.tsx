import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BenefitGrid from '../components/BenefitGrid';
import AboutSection from '../components/AboutSection';
import ServicesGrid from '../components/ServicesGrid';
import CommunitySpotlight from '../components/CommunitySpotlight';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import BlogPreview from '../components/BlogPreview';
import Footer from '../components/Footer';
import Parser from 'rss-parser';
import type { GetStaticProps } from 'next';

const SUBSTACK_FEED = 'https://danadragomirescu.substack.com/feed';
const FALLBACK_IMAGE = '/assets/holistic-healer-49.jpeg';

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getExcerpt(html: string) {
  const text = html.replace(/<[^>]+>/g, '').replace(/&[a-z]+;/gi, '');
  if (text.length <= 100) return text;
  const truncated = text.slice(0, 100);
  return truncated.slice(0, truncated.lastIndexOf(' ')) + '…';
}

export const getStaticProps: GetStaticProps = async () => {
  const parser = new Parser();
  let posts = [];
  try {
    const feed = await parser.parseURL(SUBSTACK_FEED);
    posts = (feed.items || []).slice(0, 3).map((item: any) => ({
      title: item.title,
      pubDate: formatDate(item.pubDate),
      excerpt: getExcerpt(item['content:encoded'] || item.content || ''),
      link: item.link,
      image: (item.enclosure && item.enclosure.url) || FALLBACK_IMAGE,
    }));
  } catch (e) {
    posts = [];
  }
  return { props: { posts } };
};

export default function Home({ posts }: { posts: any[] }) {
  return (
    <>
      <Header />
      {/* Main grid container for all sections */}
      <main className="w-full max-w-[1200px] mx-auto grid grid-cols-1 gap-y-24 px-3 md:px-6">
        {/* Each section uses generous spacing and clear separation */}
        <section id="hero"><HeroSection /></section>
        <section id="benefits"><BenefitGrid /></section>
        <section id="about"><AboutSection /></section>
        <section id="services"><ServicesGrid /></section>
        <section id="community"><CommunitySpotlight /></section>
        <section id="testimonials"><TestimonialsCarousel /></section>
        <section id="blog"><BlogPreview posts={posts} /></section>
        <section id="contact"><Footer /></section>
      </main>
    </>
  );
} 