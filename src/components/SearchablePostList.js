'use client';

import { useState } from 'react';
import Link from 'next/link';

const SearchIcon = () => (
  <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export default function SearchablePostList({ posts }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post => {
    const searchString = `${post.title} ${post.tag} ${post.excerpt}`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="animate-fade-in delay-2">
      <div className="search-wrapper">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search poems, stories, or tags..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="post-grid">
        {filteredPosts.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0' }}>
            No works found matching your search.
          </p>
        ) : (
          filteredPosts.map((post, index) => (
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
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&q=80)` }} // Alternate elegant default
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
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
