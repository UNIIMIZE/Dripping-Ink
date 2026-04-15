import { getPostBySlug, getAllPosts, markdownToHtml } from '@/lib/api';
import Head from 'next/head';

export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'excerpt', 'coverImage']);
  return {
    title: `${post.title} | Dripping Ink`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
  };
}

export default async function Post({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
    'tag',
    'centered'
  ]);
  const content = await markdownToHtml(post.content || '');

  return (
    <article className="animate-fade-in delay-1">
      {post.coverImage && (
        <div className="featured-image-wrapper">
          <img
            src={post.coverImage}
            alt={`Cover Image for ${post.title}`}
            className="featured-image"
          />
        </div>
      )}
      <div className="post-header animate-fade-in delay-2">
        <h1 style={{ fontSize: '3rem', letterSpacing: '-0.02em' }}>{post.title}</h1>
        <div className="meta">
          {post.author ? `By ${post.author} • ` : ''} 
          <time>{new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</time>
          {post.tag && <span style={{ marginLeft: '12px', color: 'var(--accent-color)' }}>[{post.tag}]</span>}
        </div>
      </div>
      
      <div 
        className={`post-content animate-fade-in delay-3 ${post.tag?.toLowerCase() === 'poetry' ? 'poetry' : ''} ${post.centered ? 'centered' : ''}`}
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </article>
  );
}
