/**
 * Root layout with SEO metadata and global styles.
 * @author Tristan Mahinay
 */
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Gotchu - Your Home Services, Made Simple",
  description:
    "Connect with trusted local professionals for cleaning, repairs, errands, and more. Quality service at your fingertips — because you deserve peace of mind.",
  keywords: [
    "home services",
    "cleaning",
    "repairs",
    "errands",
    "handyman",
    "Philippines",
    "trusted professionals",
  ],
  authors: [{ name: "Gotchu" }],
  creator: "Gotchu",
  publisher: "Gotchu",
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://gotchu.ph",
    siteName: "Gotchu",
    title: "Gotchu - Your Home Services, Made Simple",
    description:
      "Connect with trusted local professionals for cleaning, repairs, errands, and more. Quality service at your fingertips.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gotchu - Home Services Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gotchu - Your Home Services, Made Simple",
    description:
      "Connect with trusted local professionals for cleaning, repairs, errands, and more.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
