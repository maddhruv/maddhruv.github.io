import Link from "next/link";

export const Category = ({ name, count }: { name: string; count?: number }) => {
  return (
    <Link href={`/category/${name}`}>
      <div className="bg-blue-500 inline hover:bg-blue-600 px-4 py-1 rounded-md">
        {name}
        {count && (
          <span className="text-sm text-gray-900 font-bold ml-2">
            ({count})
          </span>
        )}
      </div>
    </Link>
  );
};
