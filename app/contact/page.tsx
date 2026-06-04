import type { Metadata } from "next";
import Contact from "@/components/page-content/Contact";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact EcoHaul Dubai | Junk Removal & Logistics",
  description:
    "Get in touch for premium junk removal in Dubai. Call 050 325 0142, WhatsApp 24/7, or send a message to schedule a pickup.",
  path: "/contact",
});

export default Contact;
