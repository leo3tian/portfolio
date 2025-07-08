import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { CallProvider } from "./contexts/CallContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio showcasing my work and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} ${playfair.variable} antialiased`}
      >
        <CallProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
        </CallProvider>
      </body>
    </html>
  );
}
