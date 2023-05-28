import { formatNumber } from "@/lib/utils";
import { getAllPageviews } from "@/src/queries/getAllPageviews";
import { Header } from "@/components/header";

export const revalidate = 600;

export default async function PageViews() {
  const views = await getAllPageviews();
  return (
    <>
      <Header location="home" />

      <div className="grid place-items-center text-9xl py-10">
        {formatNumber(views)} views
      </div>
    </>
  );
}
