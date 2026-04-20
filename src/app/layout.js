import "./globals.css";

export const metadata = {
  title: "Sudhan M | Affordable Websites for Businesses & Personal Brands",
  description:
    "I build clean, modern, and affordable websites for small businesses, local shops, startups, and freelancers.",
  keywords: "affordable websites, freelance web developer, small business website, portfolio website, landing page, India",
  metadataBase: new URL("https://sudhanm.dev"),
  openGraph: {
    title: "Sudhan M | Affordable Web Development",
    description: "Clean, modern, affordable websites for businesses and personal brands.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
