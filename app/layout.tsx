import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/components/reduxProvider";

export const metadata: Metadata = {
  title: "Shopit",
  description: "A shopping website built with next js",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased font-sans`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
