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
  title: "Garis2Architect - Creating Exceptional Architectural Experiences",
  description:
    "Garis2Architect specializes in residential, commercial, and urban planning projects. We create architectural experiences that inspire, innovate, and transform communities through thoughtful design.",
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
