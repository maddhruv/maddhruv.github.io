import config from "@/lib/config";
import { Fira_Code } from "next/font/google";
import Script from "next/script";

import "./global.css";
import { Metadata } from "next";
import { Footer } from "@/components/footer";

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
    url: config.host,
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-M2KT43XFWM`}
      />

      <Script strategy="lazyOnload" id="ga">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-M2KT43XFWM', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <body className={`${firaCode.className} p-2`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
