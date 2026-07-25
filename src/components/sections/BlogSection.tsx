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
              href="https://blog-mahadi-indra.vercel.app"
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
