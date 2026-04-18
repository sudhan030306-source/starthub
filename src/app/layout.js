import "./globals.css";

// ─── SITE METADATA — edit these to match your details ───────────────────────
export const metadata = {
  title: "Your Name | Affordable Websites for Businesses & Personal Brands",
  description:
    "I build clean, modern, and affordable websites for small businesses, local shops, startups, and freelancers. Practical websites that actually work for you.",
  keywords:
    "affordable websites, freelance web developer, small business website, portfolio website, landing page, India",
  // ── Replace with your real URL once deployed ──
  metadataBase: new URL("https://yourname.dev"),
  openGraph: {
    title: "Your Name | Affordable Web Development",
    description: "Clean, modern, affordable websites for businesses and personal brands.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts — Sora (display) + DM Sans (body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        {/* ── Favicon — replace /favicon.ico with your own ── */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-body bg-brand-warm text-brand-ink antialiased">
        {children}
      </body>
    </html>
  );
}
