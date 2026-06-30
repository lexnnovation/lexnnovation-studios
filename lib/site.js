// Single source of truth for site-wide constants. See AGENTS.md for the verified facts.

export const site = {
  name: "Lexnnovation Studios",
  shortName: "Lexnnovation",
  url: "https://lexnnovation.com",
  tagline: "Software Development & AI Engineering Studio",
  description:
    "Lexnnovation Studios is a software development & AI engineering studio in Ghana. Our flagship product, Reciva, is an AI receptionist that chats with your customers on WhatsApp, qualifies them, and captures every lead — so you never miss a sale.",
  email: "hello@lexnnovation.com",
  phoneDisplay: "+233 20 823 3500",
  phoneCompact: "+233208233500",
  whatsapp: "https://wa.me/233208233500",
  location: "Accra, Ghana",
  founder: "Alex Teye Larweh",
};

// Flagship product brand.
export const product = {
  name: "Reciva",
  category: "WhatsApp AI Receptionist",
  subtitle: "Your WhatsApp AI Receptionist",
  tagline: "Never miss a customer again.",
  description:
    "Reciva is a WhatsApp AI receptionist that chats with your customers, answers their questions, qualifies them, and captures every lead — 24/7, in your brand's voice.",
};

export const reciaFeatures = [
  {
    icon: "receptionist",
    title: "AI receptionist",
    body: "Greets, answers, and guides every customer like a trained front-desk agent — automatically.",
  },
  {
    icon: "whatsapp",
    title: "WhatsApp-first",
    body: "Built for the channel your customers already use. No new app to install — they just message you.",
  },
  {
    icon: "sparkles",
    title: "Smart & human-like",
    body: "Replies feel natural and on-brand, not robotic — powered by the latest AI.",
  },
  {
    icon: "lead",
    title: "Captures every lead",
    body: "Qualifies each enquiry and saves the lead to your database, so nothing slips through.",
  },
  {
    icon: "calendar",
    title: "Bookings & appointments",
    body: "Collects the details and books appointments straight from the chat.",
  },
  {
    icon: "chart",
    title: "Insights & analytics",
    body: "See every lead and conversation, so you always know what's working.",
  },
];

// Short, honest trust signals — no fabricated logos or metrics.
export const trustBadges = [
  "WhatsApp-native",
  "Replies 24/7",
  "Captures every lead",
  "Built in Ghana",
];

// What Reciva does — 3-up summary (icons from components/Icons.js).
export const whatItDoes = [
  {
    icon: "whatsapp",
    title: "Chats & answers",
    body: "Greets every customer on WhatsApp and answers their questions naturally, in your brand's voice — no app to install.",
  },
  {
    icon: "lead",
    title: "Qualifies & captures leads",
    body: "Asks the right questions, qualifies the enquiry, and saves the lead to your database so nothing slips through.",
  },
  {
    icon: "receptionist",
    title: "Notifies you instantly",
    body: "Saves the lead and alerts you in real time that a new customer is waiting for your follow-up.",
  },
];

// Who it's for — niche-agnostic use cases (no invented clients).
export const useCases = [
  { icon: "lead", title: "Real estate", body: "Qualify buyers and renters by budget, location, and timeline — capture every enquiry before they message the next agent." },
  { icon: "chart", title: "Retail & vendors", body: "Answer product, price, and availability questions instantly, and turn DMs into orders and leads." },
  { icon: "calendar", title: "Clinics & services", body: "Handle bookings and FAQs around the clock so the front desk never misses a patient or client." },
  { icon: "sparkles", title: "Agencies & studios", body: "Greet inbound leads, screen them, and hand you only the conversations worth your time." },
];

// Why Reciva — value pillars.
export const valuePillars = [
  { title: "Never miss a lead", body: "Every customer gets an instant reply, day or night. No missed message means no missed sale." },
  { title: "Sounds human, on-brand", body: "Reciva is AI-led, not a robotic form. Replies feel natural and match your business's voice." },
  { title: "On the channel they already use", body: "No new app, no website detour — customers just message your WhatsApp like they always do." },
];

// FAQ — real answers; data questions link to the legal pages.
export const faqs = [
  {
    q: "How does Reciva work?",
    a: "A customer messages your WhatsApp number. Reciva chats with them, answers questions about your business, qualifies the enquiry, and captures the lead — then notifies you that a new lead is saved and waiting for your follow-up. All automatically, 24/7.",
  },
  {
    q: "Which businesses is it for?",
    a: "Any business that gets customer enquiries on WhatsApp — real estate, retail and vendors, clinics and services, agencies, and more. Reciva is configured to your business, so it fits your niche.",
  },
  {
    q: "Does it sound robotic?",
    a: "No. Reciva is AI-led and answers naturally in your brand's voice, while still reliably collecting the details you need to follow up and close.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. We're transparent about what we store and how. See our Privacy Policy and Data Deletion pages for full details and how to request deletion.",
  },
];

export const navLinks = [
  { label: "Reciva", href: "/#reciva" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Use cases", href: "/#use-cases" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Data Deletion", href: "/data-deletion" },
  { label: "Contact", href: "/contact" },
];

// Founder/brand social. X only — GitHub & LinkedIn intentionally omitted (owner, 2026-06-30).
export const socials = [
  { label: "X", href: "https://x.com/lexnnovation" },
];
