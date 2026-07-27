'use client';

import { type Post } from '@/lib/api/blog';

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="magic-card magic-card--interactive flex flex-col gap-4 no-underline"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="magic-tag magic-tag--accent">{post.type}</span>
        <span className="text-xs text-(--text-weak)">{formatDate(post.date)}</span>
      </div>
      <h3 className="text-xl font-semibold leading-tight tracking-[-0.045em] text-(--text-strong)">
        {post.title}
      </h3>
      <p className="text-sm leading-relaxed text-(--text)">{post.excerpt}</p>
      <div className="mt-auto flex flex-wrap items-center gap-2">
        <span className="magic-tag">{post.category}</span>
        <span className="text-xs text-(--text-weak)">{post.readingTime}</span>
      </div>
    </a>
  );
}
