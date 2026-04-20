// Shared shell used by every sub-page — wraps content with Navbar + Footer
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PageShell({ children }) {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: 70 }}>
        {children}
      </div>
      <Footer />
    </main>
  );
}
