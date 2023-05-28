import config from "@/lib/config";
import { Fira_Code } from "next/font/google";

import "./global.css";
import { generateRss } from "@/lib/generateRss";

export const metadata = {
  title: config.siteTitle,
  description: config.description,
};

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} p-2`}>{children}</body>
    </html>
  );
}
