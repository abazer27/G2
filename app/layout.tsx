import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "./components/layout/ClientLayout";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const futura = localFont({
  src: [
    {
      path: "../public/font/futura-pt/FuturaCyrillicLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/futura-pt/FuturaCyrillicBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/futura-pt/FuturaCyrillicMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/futura-pt/FuturaCyrillicDemi.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/font/futura-pt/FuturaCyrillicBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/futura-pt/FuturaCyrillicExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/font/futura-pt/FuturaCyrillicHeavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-futura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Garis2Architect | Creating Exceptional Architectural Experiences",
  description:
    "Garis2Architect specializes in residential, commercial, and urban planning projects. We create architectural experiences that inspire, innovate, and transform communities through thoughtful design.",
  keywords:
    "architecture, residential design, commercial architecture, urban planning, architectural firm, modern architecture, building design",
  openGraph: {
    title: "Garis2Architect | Exceptional Architectural Experiences",
    description:
      "We create architectural experiences that inspire, innovate, and transform communities through thoughtful design.",
    type: "website",
    url: "https://garis2architect.com/",
    images: [
      {
        url: "/images/hero/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Garis2Architect - Creating Exceptional Architectural Experiences",
      },
    ],
    siteName: "Garis2Architect",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garis2Architect | Exceptional Architectural Experiences",
    description:
      "We create architectural experiences that inspire, innovate, and transform communities through thoughtful design.",
    images: ["/images/hero/hero-bg.jpg"],
    site: "@garis2architect",
    creator: "@garis2architect",
  },
  applicationName: "Garis2Architect",
  authors: [{ name: "Garis2Architect Team", url: "https://garis2architect.com/about" }],
  creator: "Garis2Architect Team",
  publisher: "Garis2Architect",
  metadataBase: new URL("https://garis2architect.com/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "id-ID": "/id-ID",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.variable} ${roboto.variable} ${futura.variable} antialiased min-h-full flex flex-col`}
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
