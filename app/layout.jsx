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
  description: "CLASFON - Christian Lawyers Fellowship of Nigeria",
  keywords: "lawyers, Christian, fellowship, Nigeria, legal professionals",
  author: "CLASFON Team",
  viewport: "width=device-width, initial-scale=1",
  charset: "UTF-8",
  robots: "index, follow",
  og: {
    title: "CLASFON",
    description: "Christian Lawyers Fellowship of Nigeria - Empowering legal professionals with Christian values.",
    type: "website",
    url: "https://clasfon.com.ng",
    image: "https://clasfon.com.ng/assets/logo-3.png"
  },
  favicon: "/assets/favicon.png"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${playfairDisplay.className} ${sintony.className} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
