//app>layout.tsx

import { Roboto } from "next/font/google";
import "modern-normalize";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Footer } from "@/components/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "My Notes App",
    template: "%s | My Notes App",
  },
  description: "Створю, редагуй та просто переглядай нотатки",
  keywords: ["blog", "posts", "react", "next.js", "seo"],
  authors: [
    {
      name: "Marian Dev",
      url: "https://07-routing-nextjs-tau-woad.vercel.app/",
    },
  ],
  creator: "Marian Dev",
  openGraph: {
    title: "My Notes App",
    description: "Створю, редагуй та просто переглядай нотатки",
    url: "https://07-routing-nextjs-tau-woad.vercel.app/",
    siteName: "My Notes App",
    images: [
      {
        url: `https://ac.goit.global/fullstack/react/notehub-og-meta.jpg`,
        width: 1200,
        height: 630,
        alt: "My Notes App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Notes App",
    description: "Створю, редагуй та просто переглядай нотатки",
    images: [`https://ac.goit.global/fullstack/react/notehub-og-meta.jpg`],
    creator: "@yourhandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "../pablic/favicon/my_logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <TanStackProvider>
          <Header />
          <main>
            {children}
            {modal}
          </main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
