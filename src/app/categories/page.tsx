import { Header } from "@/components/header";
import { getCategories } from "@/src/queries/getCategories";

import config from "@/lib/config";
import { Category } from "@/components/category";

export const revalidate = 60;

export const metadata = {
  title: `Categories | ${config.title}`,
  description: config.description,
  openGraph: {
    type: "website",
    title: `Categories | ${config.title}`,
    description: config.description,
    siteName: config.title,
  },
  twitter: {
    title: `Categories | ${config.title}`,
    description: config.description,
  },
};

export default async function Page() {
  const categories = await getCategories();

  return (
    <>
      <Header location="post" />
      <main className="flex min-h-screen flex-col p-2 pt-4 lg:px-14 mx-auto max-w-screen-2xl">
        <h1 className="text-3xl text-primary-600 font-bold mb-4">Categories</h1>
        {categories.map((c) => (
          <div key={c.name} className="mb-2">
            <Category count={c.count} name={c.name} />
          </div>
        ))}
      </main>
    </>
  );
}
