import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gamers N Geeks Modern Redesign",
  description:
    "A modern website redesign concept for Gamers N Geeks, focused on community, usability, and performance.",
};

const themeInitializationScript = `
  (function () {
    var storageKey = "gng-theme";
    var theme;

    try {
      var storedTheme = localStorage.getItem(storageKey);
      theme = storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    } catch (error) {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    document.documentElement.dataset.theme = theme;
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        id="theme-initialization"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: themeInitializationScript }}
      />
      <body className={inter.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
