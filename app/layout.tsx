import { Footer, Navbar, ScrollToTop } from "@/components";
import { MobileNavBar } from "@/components/MobileNavbar";
import "@/public/manifest.json";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://projectshut.vercel.app/"),
  manifest: "/manifest.json",
  title: {
    default: "ProjectsHut - Learn. Build. Share.",
    template: "%s - ProjectsHut",
  },
  description:
    "A platform where you can share your open source projects with the world.",
  keywords: [
    "ProjectHut",
    "projects",
    "educational resources",
    "wide range of products",
    "high-quality projects",
    "React",
    "Nodejs",
    "JavaScript",
    "open source",
    "contribution",
    "learners",
  ],
  authors: { name: "Priyankar Pal" },
  openGraph: {
    title: "ProjectsHut - Learn. Build. Share.",
    description:
      "A platform where you can share your open source projects with the world.",
    url: "https://projectshut.vercel.app",
    siteName: "ProjectHut",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "ProjectsHut - Learn. Build. Share.",
    card: "summary_large_image",
    description:
      "A platform where you can share your open source projects with the world.",
    images:
      "https://user-images.githubusercontent.com/88102392/251507361-e71396f9-92c6-4664-b7e4-4275cb902e65.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />

        {children}

        <MobileNavBar />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
