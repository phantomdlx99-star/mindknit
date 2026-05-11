import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // This MUST match the variable in your CSS
});

export const metadata: Metadata = {
  title: "MindKnit - Interactive Mind Maps & Knowledge Sharing",
  description:
    "MindKnit is a collaborative platform for creating, sharing, and discovering interactive mind maps. Organize your thoughts, visualize connections, and build knowledge networks with our intuitive mind mapping tools.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins">
        <ClerkProvider
          appearance={{
            variables: {
              fontFamily: "var(--font-poppins)",
            },
          }}
        >
          <Sidebar />
          <main className="ml-58">
            <Header />
            {children}
          </main>
        </ClerkProvider>
      </body>
    </html>
  );
}
