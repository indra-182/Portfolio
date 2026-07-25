import { fetchLatestPosts, type Post } from '@/lib/api/blog';

function PostCard({ post }: { post: Post }) {
  return (
    <article
      className="neo-card flex cursor-pointer flex-col gap-3 transition-[box-shadow,transform] hover:translate-x-1 hover:translate-y-1 active:translate-x-1.25 active:translate-y-1.25"
      style={{ boxShadow: '5px 5px 0px 0px #000' }}
      onClick={() => window.open(post.url, '_blank', 'noopener,noreferrer')}
    >
      <div className="flex items-center gap-2">
        <span className="neo-tag">{post.type}</span>
        <span className="text-xs font-bold uppercase opacity-70">{post.date}</span>
      </div>

      <h3 className="text-xl font-black uppercase leading-tight tracking-tight">{post.title}</h3>

      <p className="text-sm leading-relaxed opacity-80">{post.excerpt}</p>

      <div className="mt-auto flex flex-wrap items-center gap-2">
        <span className="neo-tag" style={{ background: 'var(--neo-accent-2)', color: '#FFF' }}>
          {post.category}
        </span>
        <span className="text-xs font-bold uppercase opacity-60">{post.readingTime}</span>
      </div>
    </article>
  );
}

function Skeleton() {
  return (
    <div className="neo-card animate-pulse">
      <div className="mb-3 h-4 w-24 bg-black/20" />
      <div className="mb-2 h-6 w-3/4 bg-black/20" />
      <div className="mb-4 h-4 w-full bg-black/20" />
      <div className="h-4 w-1/3 bg-black/20" />
    </div>
  );
}

export default async function BlogSection() {
  let posts: Post[] = [];
  let error = false;

  try {
    posts = await fetchLatestPosts();
  } catch {
    error = true;
  }

  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="neo-section-title">Latest Posts</h2>

      {error || posts.length === 0 ? (
        <div className="neo-card text-center">
          <p className="mb-4 text-lg font-bold uppercase">
            Latest from my blog
          </p>
          <p className="text-sm">
            Check{' '}
            <a
              href="https://blog-seven-sandy-41.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
            >
              blog.indra.dev
            </a>
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
