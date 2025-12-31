import "../landing-globals.css";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav-bura.png" />
      </head>
      <body className="relative min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
