import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins, Sintony, Playfair_Display } from 'next/font/google'
import Footer from "@/components/Footer";

// Load Google Fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const sintony = Sintony({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "CLASFON",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${playfairDisplay.className} ${sintony.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
