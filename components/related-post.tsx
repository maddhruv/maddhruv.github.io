import Link from "next/link";

interface RelatedPostProps {
  post: {
    slug: string;
    coverImage: string;
    title: string;
    description: string;
  };
}

export const RelatedPost: React.FC<RelatedPostProps> = ({ post }) => {
  return (
    <div className="">
      <Link href={`/blog/${post.slug}`}>
        <img src={post.coverImage} alt={post.title} />
        <h3 className="text-xl text-purple hover:text-purple-600 font-medium mt-4">
          {post.title}
        </h3>
      </Link>
      <p className="text-gray-300 line-clamp-4">{post.description}</p>
    </div>
  );
};
