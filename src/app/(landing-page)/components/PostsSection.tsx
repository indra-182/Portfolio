import { formatDate } from "../../../helper/function";
import { fetchPayload } from "../../../lib/payload";
import Link from "next/link";


const PostsSection = async () => {
  const payload = await fetchPayload();
  const posts = await payload.find({
    collection: "posts",
    limit: 10,
    sort: '-createdAt',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex gap-12 sm:gap-24">
        <div className="w-72">
          <h2 className="text-3xl font-bold text-light ">
            Latest from <br />
            my blog
          </h2>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-12">
          {posts.docs.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`} className="group block">
              <article className="space-y-4">
                <h3 className="text-2xl font-semibold text-light group-hover:text-purple-400 transition-colors mb-3">{post.title}</h3>
              </article>
              <div>
                <time className="text-slate-300">{formatDate(post.createdAt)}</time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsSection;
