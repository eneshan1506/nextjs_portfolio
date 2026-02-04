import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import ScrollToTop from "@/app/components/ScrollToTop";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
