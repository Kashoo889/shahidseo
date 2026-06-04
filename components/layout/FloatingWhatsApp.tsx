import { MessageCircle } from "lucide-react";
import { waHref } from "@/data/contact";

export function FloatingWhatsApp() {
  return (
    <a
      href={waHref}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp us"
      className="fixed right-5 z-30 hidden h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-card transition hover:scale-105 lg:flex"
      style={{ bottom: "1.5rem" }}
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}
