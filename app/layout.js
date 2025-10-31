import { ClerkProvider } from "@clerk/nextjs";
import { Outfit } from "next/font/google";
import "./globals.css";

import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";  // ✅ Import Navbar

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] });

export const metadata = {
  title: "DesiDeal",
  description: "E-Commerce with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`}>
          <Toaster />
          <AppContextProvider>
            {/* ✅ Global Navbar (same on all pages) */}
           

            {/* ✅ Page Content (adjusted for fixed navbar height) */}
            <main className="pt-24">{children}</main>

            {/* Footer (if needed) */}
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
