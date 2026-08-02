import { Suspense } from 'react';
import { fetchLatestPosts, type Post } from '@/lib/api/blog';
import PostCard from './PostCard';

function LoadingList() {
  return (
    <ul className="writing-list" aria-label="Loading writing">
      {[0, 1, 2].map((index) => (
        <li key={index} className="writing-skeleton" aria-hidden="true" />
      ))}
    </ul>
  );
}

async function BlogPosts() {
  let posts: Post[] = [];

  try {
    posts = await fetchLatestPosts(3);
  } catch {
    posts = [];
  }

  if (posts.length === 0) {
    return (
      <div className="writing-empty">
        <p>Latest from the journal</p>
        <a href="https://blog-mahadi-indra.vercel.app" target="_blank" rel="noopener noreferrer">
          Read the full blog <span aria-hidden="true">↗</span>
        </a>
      </div>
    );
  }

  return (
    <ul className="writing-list" aria-label="Latest writing">
      {posts.map((post) => (
        <li key={post.slug}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}

export default function BlogSection() {
  return (
    <section id="blog" className="section section--writing" aria-labelledby="writing-heading">
      <div className="section-shell">
        <div className="section-heading section-heading--row">
          <div>
            <p className="eyebrow">Writing</p>
            <h2 id="writing-heading">Notes from the workbench.</h2>
          </div>
          <a
            className="text-link"
            href="https://blog-mahadi-indra.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the full blog <span aria-hidden="true">↗</span>
          </a>
        </div>

        <Suspense fallback={<LoadingList />}>
          <BlogPosts />
        </Suspense>
      </div>
    </section>
  );
}
