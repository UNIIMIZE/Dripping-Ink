import { getAllPosts } from '@/lib/api';
import SearchablePostList from '@/components/SearchablePostList';

export const metadata = {
  title: 'Archive | Dripping Ink',
  description: 'Archive of all poems and short stories.',
};

export default function BlogIndex() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'tag']);

  return (
    <div>
      <h1 style={{ marginBottom: '10px' }}>Archive</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>
        Find all the previous writings, poems, and stories. Use the search to filter by title or tag.
      </p>
      
      <SearchablePostList posts={allPosts} />
    </div>
  );
}
