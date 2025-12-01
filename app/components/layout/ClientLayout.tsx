"use client";

import { LoadingProvider, useLoading } from "../providers/LoadingProvider";
import LoadingScreen from "../ui/LoadingScreen";
import PageTransition from "../ui/PageTransition";
import Header from "./Header";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoading();

  return (
    <>
      <AnimatePresence mode="wait">
        <LoadingScreen isLoading={isLoading} />
      </AnimatePresence>

      <Header />
      <main className="grow">
        <AnimatePresence mode="wait">
          <PageTransition>{children}</PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LoadingProvider>
      <LayoutContent>{children}</LayoutContent>
    </LoadingProvider>
  );
}
