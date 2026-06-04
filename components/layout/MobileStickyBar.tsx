import { Phone, MessageCircle } from "lucide-react";
import { telHref, waHref } from "@/data/contact";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-surface/95 backdrop-blur lg:hidden">
      <a href={telHref} className="flex items-center justify-center gap-2 py-3 text-xs font-semibold text-ink sm:text-sm">
        <Phone className="h-4 w-4 text-primary" /> Call Now
      </a>
      <a href={waHref} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-primary py-3 text-xs font-semibold text-primary-foreground sm:text-sm">
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  );
}
