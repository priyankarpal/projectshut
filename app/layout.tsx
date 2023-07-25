import "./globals.css";
import { Inter } from "next/font/google";
import { MobileNavBar } from "@/components/MobileNavbar";
import { Navbar, Footer, ScrollToTop } from "@/components";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ProjectsHut - Learn. Build. Share.",
  description:
    "A platform where you can share your open source projects with the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <title>ProjectHut-Learn.Build.Share</title>
        <meta name="title" content="ProjectHut-Learn.Build.Share" />
        <meta
          name="description"
          content="ProjectsHut is an open source web app that enables users to freely publish their projects and create user profiles within the platform "
        />
        <meta name="language" content="en" />
        <meta name="keywords" content="ProjectHut, projects, educational resources, wide range of projects, high-quality projects, React, Nodejs , javascript, open source, contribution , learners" />
        <meta name="author" content="Priyankar Pal" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph meta tags for website preview */}
        <meta property="og:title" content="ProjectHut - Learn.Build.Share" />
        <meta property="og:description" content="ProjectsHut is an open source web app that enables users to freely publish their projects and create user profiles within the platform." />
        <meta property="og:url" content="https://projectshut.vercel.app/" /> {/* Replace with the actual URL of the page */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ProjectHut" />
        {/* Twitter meta tags for website preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="ProjectHut - Learn.Build.Share" />
        <meta property="twitter:description" content="ProjectsHut is an open source web app that enables users to freely publish their projects and create user profiles within the platform." />
     
      </head>
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
