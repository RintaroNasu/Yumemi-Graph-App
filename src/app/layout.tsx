import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yumemi Graph App",
  description: "Yumemi Graph App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
