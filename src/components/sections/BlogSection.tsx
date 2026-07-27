import { fetchLatestPosts, type Post } from '@/lib/api/blog';
import PostCard from './PostCard';

export default async function BlogSection() {
  let posts: Post[] = [];
  let error = false;

  try {
    posts = await fetchLatestPosts();
  } catch {
    error = true;
  }

  return (
    <section id="blog" className="magic-section">
      <div className="magic-section__heading">
        <p className="magic-section__kicker mb-3">From the journal</p>
        <h2 className="magic-section__title">Latest Posts</h2>
      </div>

      {error || posts.length === 0 ? (
        <div className="magic-card text-center">
          <p className="mb-2 text-lg font-semibold tracking-[-0.03em] text-(--text-strong)">
            Latest from my blog
          </p>
          <p className="text-sm text-(--text-weak)">
            Check{' '}
            <a
              href="https://blog-mahadi-indra.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--accent) underline"
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
