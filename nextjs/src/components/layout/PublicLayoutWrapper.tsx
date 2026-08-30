"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/layout/ConsultationModal";
import GlobalReviews from "@/components/layout/GlobalReviews";
import ClientInit from "@/components/layout/ClientInit";
import LenisProvider from "@/components/layout/LenisProvider";

export default function PublicLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    // Exclude public header, footer, Lenis smooth scroll, reviews, and modals from Admin panel
    return <>{children}</>;
  }

  return (
    <LenisProvider>
      <Header />
      <ClientInit />
      {children}
      <GlobalReviews />
      <Footer />
      <ConsultationModal />
    </LenisProvider>
  );
}
