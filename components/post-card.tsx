import { getImageUrl } from "@/lib/utils";
import Link from "next/link";
import { Category } from "./category";

export const PostCard = ({ post, index }) => {
  return (
    <li>
      <section className="flex flex-col lg:flex-row gap-4">
        <div>
          <Link href={`/blog/${post.slug}`}>
            <img
              src={getImageUrl(post.coverImage, "homepage")}
              alt={`${post.title} - cover`}
              loading={index < 3 ? "eager" : "lazy"}
              width="400px"
              style={{
                minHeight: "210px",
              }}
              className="object-cover"
            />
          </Link>
        </div>
        <div className="flex-1">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-2xl text-purple hover:text-purple-600 font-medium">
              {post.title}
            </h2>
          </Link>
          <p className="font-light line-clamp-2 lg:line-clamp-3">
            {post.description}
          </p>
          <div className="flex gap-2 mt-2">
            {post.categories &&
              post.categories.map((category) => <Category name={category} />)}
          </div>
        </div>
      </section>
    </li>
  );
};
