import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

// One cohesive geometric sans for the whole site — set big & heavy for display,
// regular for body (the look used on q.prestoghana.com).
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "WhatsApp AI Receptionist for your business | Reciva AI by Lexnnovation Studios",
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "WhatsApp AI Receptionist",
    "AI receptionist",
    "lead capture",
    "software development Ghana",
    "AI automation",
    "Lexnnovation Studios",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  alternates: { canonical: site.url },
};

// Set the theme class before paint to avoid a flash. Default is light: only opt into dark.
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} h-full`}>
      <body suppressHydrationWarning className="flex min-h-full flex-col bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
