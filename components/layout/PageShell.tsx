import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileStickyBar } from "./MobileStickyBar";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background pb-16 lg:pb-0">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileStickyBar />
      <FloatingWhatsApp />
    </div>
  );
}
