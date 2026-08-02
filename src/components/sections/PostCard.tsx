import type { Post } from '@/lib/api/blog';

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="writing-card">
      <a href={post.url} target="_blank" rel="noopener noreferrer" className="writing-card__link">
        <div className="writing-card__meta">
          <span>{post.type}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="text-link">
          Read article <span aria-hidden="true">↗</span>
        </span>
      </a>
    </article>
  );
}
