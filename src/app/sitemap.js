import { getAllPosts } from '@/lib/api';

export default function sitemap() {
  const baseUrl = 'https://your-github-username.github.io/poetry-blog';
  const posts = getAllPosts(['slug', 'date']);
  
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split('T')[0],
  }));

  const routes = ['', '/blog', '/about', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...postUrls];
}
