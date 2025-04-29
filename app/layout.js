import Header from "@/components/Layout/Header";
import "./globals.css";
import Footer from "@/components/Layout/Footer";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Therapix",
  description: "Online ai therapy",
  icons: "/logo.svg"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        <Analytics />
      </body>
    </html>
  );
}
