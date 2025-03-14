import { fetchPayload } from "../../../../lib/payload";
import { RichText as SerializeRichText } from "@payloadcms/richtext-lexical/react";

type Params = Promise<{ postId: string }>;

const Page = async (props: { params: Params }) => {
  const { postId } = await props.params;
  const payload = await fetchPayload();

  const post = await payload.find({
    collection: "posts",
    where: {
      id: {
        equals: postId,
      },
    },
  });

  if (!post.docs || post.docs.length === 0) return <div>Post not found</div>;

  const data = post.docs[0];

  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20">
      <h1 className="text-center text-5xl font-bold mb-8 leading-normal">
        {data.title}
      </h1>
      <SerializeRichText className="payload-richtext" data={data.content} />
    </div>
  );
};

export default Page;
