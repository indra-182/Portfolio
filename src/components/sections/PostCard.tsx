'use client';

import { type Post } from '@/lib/api/blog';
import { HoverCard } from '@/components/MotionWrapper';

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <HoverCard as="article">
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col gap-3 border border-border bg-surface p-5 no-underline"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="tag-pill tag-pill--accent">{post.type}</span>
          <span className="text-xs text-text-tertiary">{formatDate(post.date)}</span>
        </div>
        <h3 className="text-lg font-semibold leading-tight tracking-tight text-text">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-text-secondary flex-1">{post.excerpt}</p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="tag-pill">{post.category}</span>
          <span className="text-xs text-text-tertiary">{post.readingTime}</span>
        </div>
      </a>
    </HoverCard>
  );
}
