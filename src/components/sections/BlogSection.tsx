import { fetchLatestPosts, type Post } from '@/lib/api/blog';
import { Suspense } from 'react';
import PostCard from './PostCard';

function LoadingGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="animate-pulse border border-border bg-surface p-5">
          <div className="mb-3 h-4 w-20 bg-soft" />
          <div className="mb-2 h-5 w-3/4 bg-soft" />
          <div className="mb-4 h-4 w-full bg-soft" />
          <div className="h-3 w-16 bg-soft" />
        </div>
      ))}
    </div>
  );
}

async function BlogPosts() {
  let posts: Post[] = [];
  let error = false;

  try {
    posts = await fetchLatestPosts();
  } catch {
    error = true;
  }

  if (error || posts.length === 0) {
    return (
      <div className="border border-border bg-surface p-8 text-center">
        <p className="mb-2 text-lg font-semibold tracking-tight text-text">Latest from my blog</p>
        <p className="text-sm text-text-tertiary">
          Check{' '}
          <a
            href="https://blog-mahadi-indra.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline"
          >
            blog.indra.dev
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

export default function BlogSection() {
  return (
    <section id="blog" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-(--container)">
        <div className="section-header">
          <h2 className="section-title">Latest Posts</h2>
          <p className="section-sub">From the journal</p>
        </div>

        <Suspense fallback={<LoadingGrid />}>
          <BlogPosts />
        </Suspense>
      </div>
    </section>
  );
}
