import { Google_Sans_Flex } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site, analytics } from "@/lib/site";

// One variable grotesk for the whole site — its weight axis does the work of
// two typefaces: black (900) for display, regular (400-500) for body.
const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  axes: ["opsz", "wdth", "GRAD"],
  variable: "--font-gsflex",
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
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/og.png"],
  },
  alternates: { canonical: site.url },
};

// Set the theme class before paint to avoid a flash. Default is light: only opt into dark.
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${googleSansFlex.variable} h-full`}>
      <body suppressHydrationWarning className="flex min-h-full flex-col overflow-x-hidden bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${analytics.gaId}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analytics.gaId}');`}
        </Script>
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${analytics.clarityId}");`}
        </Script>
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
