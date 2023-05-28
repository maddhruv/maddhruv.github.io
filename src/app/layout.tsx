import config from "@/lib/config";
import { Fira_Code } from "next/font/google";

import "./global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: config.siteTitle,
  description: config.description,
  applicationName: config.siteTitle,
  authors: {
    name: config.title,
  },
  keywords: config.keywords,
  creator: config.title,
  publisher: config.title,
  openGraph: {
    type: "website",
    url: config.appLink,
    title: config.siteTitle,
    description: config.description,
    siteName: config.siteTitle,
  },
  twitter: {
    site: "@maddhruv",
    creator: "@maddhruv",
    title: config.siteTitle,
    description: config.description,
  },
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
