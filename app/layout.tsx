import "./globals.css";
import { Inter } from "next/font/google";
import { MobileNavBar } from "@/components/MobileNavbar";
import { Footer } from "@/components"


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
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}

        <MobileNavBar />
        <Footer />
      </body>
    </html>
  );
}
