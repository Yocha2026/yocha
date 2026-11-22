
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yocha.in"),
  title: {
    default: "YOCHA | Experience India. Preserve Its Heritage.",
    template: "%s | YOCHA",
  },
  description:
    "Discover India's living cultures, traditional art forms, heritage destinations and authentic community experiences with YOCHA.",
  keywords: [
    "YOCHA",
    "Indian cultural heritage",
    "Cultural tourism India",
    "Kerala heritage",
    "Traditional Indian arts",
    "Heritage experiences",
  ],
  openGraph: {
    title: "YOCHA — Experience India. Preserve Its Heritage.",
    description:
      "Meet strangers. Discover stories. Explore India's living cultural heritage.",
    url: "https://yocha.in",
    siteName: "YOCHA",
    type: "website",
    images: ["/images/yocha-home-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0b1c14] text-[#f4efe4] antialiased">
        {children}
      </body>
    </html>
  );
}
