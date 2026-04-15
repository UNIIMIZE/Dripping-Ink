import { getAllPosts } from '@/lib/api';
import Link from 'next/link';

export default function Home() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'tag', 'coverImage']);
  const recentPosts = allPosts.slice(0, 6); // Show 6 for better grid layout

  return (
    <div className="animate-fade-in delay-1">
      <div style={{ marginBottom: '80px', textAlign: 'center', padding: '40px 0' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', letterSpacing: '-0.02em' }}>In love with the sky.</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', lineHeight: '1.8' }}>
          A collection of poems, short stories, and thoughts dripping like ink under a vast and quiet sky.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '40px' }}>
        <h2>Recent Works</h2>
        <Link href="/blog" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
          View All &rarr;
        </Link>
      </div>
      
      <div className="post-grid">
        {recentPosts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className={`post-card animate-fade-in delay-${(index % 3) + 1}`}>
            {post.coverImage ? (
              <div className="image-wrapper">
                <div 
                  className="post-card-image" 
                  style={{ backgroundImage: `url(${post.coverImage})` }}
                />
              </div>
            ) : (
               <div className="image-wrapper">
                <div 
                  className="post-card-image" 
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80)` }} // elegant default fallback
                />
              </div>
            )}
            
            <div className="post-card-content">
              <div className="meta">
                <span className="tag">{post.tag || 'Poetry'}</span>
                <time>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}</time>
              </div>
              <h3>
                {post.title}
              </h3>
              <p>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
