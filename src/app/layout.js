import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/ui/footer";
import { NavigationBar } from "@/components/navigation-bar";
import { FloatingButton } from "@/components/floating-button";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"]
});

export const metadata = {
  title: "PT. Bharata Alam Sentosa",
  description: "Indonesia's Natural Taste, World-Class Quality",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${nunito.className} antialiased`}
      >
        <Navbar>
          {children}
        </Navbar>
        <FloatingButton />
        <NavigationBar />
        <Footer />
      </body>
    </html>
  );
}
