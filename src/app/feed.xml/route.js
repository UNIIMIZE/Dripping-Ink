import { getAllPosts } from '@/lib/api';

export async function GET() {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'author']);
  const site_url = 'https://UNIIMIZE.github.io/Dripping-ink';

  const feedItems = posts.map((post) => {
    return `
    <item>
      <title>${post.title}</title>
      <link>${site_url}/blog/${post.slug}</link>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
      ${post.author ? `<author>${post.author}</author>` : ''}
    </item>`;
  }).join('');

  const feed = `<?xml version="1.0" encoding="utf-8"?>
  <rss version="2.0">
    <channel>
      <title>Dripping Ink | Poetry &amp; Stories</title>
      <link>${site_url}</link>
      <description>A minimalist poetry and storytelling publication.</description>
      ${feedItems}
    </channel>
  </rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
