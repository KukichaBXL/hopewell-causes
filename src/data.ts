import {
  BadgeCheck,
  Eye,
  FileText,
  Headphones,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Causes", href: "#causes" },
  { label: "Volunteers", href: "#volunteers" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const features: Feature[] = [
  {
    icon: Eye,
    title: "Transparent Donations",
    text: "See exactly how each contribution is spent, with receipts down to the last dollar.",
  },
  {
    icon: BadgeCheck,
    title: "Verified NGOs",
    text: "Every partner organization passes a rigorous annual compliance audit.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    text: "Bank-grade encryption protects every transaction, every time.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Impact",
    text: "Live dashboards show your donation's effect as it happens on the ground.",
  },
  {
    icon: FileText,
    title: "Tax Benefits",
    text: "Instant, downloadable tax receipts for every donation you make.",
  },
  {
    icon: Headphones,
    title: "24/7 Donor Support",
    text: "A real human is always one message away if you have questions.",
  },
];
