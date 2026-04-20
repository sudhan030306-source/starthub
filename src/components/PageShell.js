// Shared shell used by every page — wraps content with Navbar + Footer + WhatsApp
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function PageShell({ children }) {
  return (
    <main>
      <Navbar />
      {/* pt-[70px] clears the fixed navbar height */}
      <div style={{ paddingTop: 70 }}>
        {children}
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
