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
      className="neo-card flex flex-col gap-3 no-underline transition-[box-shadow,transform] hover:translate-x-1 hover:translate-y-1 active:translate-x-1.25 active:translate-y-1.25"
      style={{ boxShadow: '5px 5px 0px 0px #000' }}
    >
      <div className="flex items-center gap-2">
        <span className="neo-tag">{post.type}</span>
        <span className="text-xs font-bold uppercase opacity-70">{formatDate(post.date)}</span>
      </div>

      <h3 className="text-xl font-black uppercase leading-tight tracking-tight">{post.title}</h3>

      <p className="text-sm leading-relaxed opacity-80">{post.excerpt}</p>

      <div className="mt-auto flex flex-wrap items-center gap-2">
        <span className="neo-tag" style={{ background: 'var(--neo-accent-2)', color: '#FFF' }}>
          {post.category}
        </span>
        <span className="text-xs font-bold uppercase opacity-60">{post.readingTime}</span>
      </div>
    </a>
  );
}
