import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Post {
  title: string;
  pubDate: string;
  excerpt: string;
  link: string;
  image: string;
}

export default function BlogPreview({ posts }: { posts: Post[] }) {
  return (
    <motion.section
      className="container mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-heading font-bold text-3xl md:text-4xl mb-10 text-center uppercase tracking-wider font-oswald text-deep-forest-teal">
        From the Journal
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post, i) => (
          <motion.a
            key={post.link}
            href={post.link}
            target="_blank"
            rel="noopener"
            className="group block rounded-2xl overflow-hidden shadow-card bg-white relative focus:outline-none focus:ring-4 focus:ring-vibrant-ochre hover:-translate-y-1 hover:shadow-lift transition"
            whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(20,93,82,0.16)' }}
            tabIndex={0}
          >
            <div className="relative w-full aspect-w-16 aspect-h-9">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
                loading={i === 0 ? 'eager' : 'lazy'}
                priority={i === 0}
              />
              <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-deep-forest-teal/80 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end">
                <h3 className="font-heading font-extrabold text-2xl text-soft-cream mb-2 drop-shadow-lg font-oswald">
                  {post.title}
                </h3>
                <span className="text-sm font-semibold text-vibrant-ochre mb-1 font-open-sans">
                  {post.pubDate}
                </span>
                <p className="text-soft-cream text-base font-open-sans mb-4 drop-shadow font-normal">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-auto">
                  <button
                    className="uppercase py-2 px-4 bg-vibrant-ochre text-deep-forest-teal font-bold rounded-lg shadow hover:-translate-y-1 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-vibrant-ochre"
                    tabIndex={0}
                  >
                    Read on Substack
                  </button>
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href="https://danadragomirescu.substack.com/"
          target="_blank"
          rel="noopener"
          className="mt-12 py-4 px-6 bg-earth-brass text-deep-forest-teal font-semibold rounded-lg hover:bg-earth-brass-dark transition focus:outline-none focus:ring-4 focus:ring-earth-brass-dark"
        >
          View All Articles on Substack
        </a>
      </div>
    </motion.section>
  );
} 