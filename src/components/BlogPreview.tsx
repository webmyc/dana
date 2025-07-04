import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function BlogPreview() {
  const { t } = useTranslation();
  const posts = t('blog.posts', { returnObjects: true }) as any[];
  return (
    <motion.section
      className="container mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-heading text-3xl mb-8 text-center">{t('blog.title')}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <a key={post.slug || post.id} href={`/blog/${post.slug || post.id}`} className="block rounded-xl overflow-hidden shadow-lg hover:scale-105 transition prose dark:prose-invert">
            <div className="relative w-full aspect-w-16 aspect-h-9">
              <Image
                src="/assets/holistic-healer-49.jpeg"
                alt={post.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="w-full h-full"
              />
            </div>
            <div className="p-4 bg-light-neutral dark:bg-deep-green">
              <h3 className="font-heading text-xl mb-2">{post.title}</h3>
              <p className="text-sm">{post.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  );
} 