import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mie:n Space — Coffee & Bakery tại Đà Nẵng",
  description:
    "Một góc nhỏ để ngày chậm lại. Ghé Mie:n Space tại 62 Lê Đình Dương, Hải Châu, Đà Nẵng.",
  keywords: [
    "Mie:n Space",
    "cafe Đà Nẵng",
    "coffee Đà Nẵng",
    "bakery Đà Nẵng",
    "62 Lê Đình Dương",
  ],
  openGraph: {
    title: "Mie:n Space — Một góc nhỏ để ngày chậm lại",
    description: "Coffee & Bakery · 62 Lê Đình Dương, Đà Nẵng",
    type: "website",
    siteName: "Mie:n Space",
    locale: "vi_VN",
  },
  icons: {
    icon: "/images/mien-logo.jpg",
    apple: "/images/mien-logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#8b3124",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
