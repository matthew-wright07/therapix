import "./globals.css";

export const metadata = {
  title: "Therapix",
  description: "Online ai therapy",
  icons: "/logo.svg"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
