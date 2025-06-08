import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('content', 'blog'));
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join('content', 'blog', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>Welcome to Thinkline Blog</h1>
      <ul>
        {posts.map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              {frontmatter.title} - {frontmatter.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
