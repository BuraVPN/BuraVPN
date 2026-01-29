import "./globals.css";

export const metadata = {
  title: "My App",
  description: "My app description",
  icons: {
    icon: "/fav-bura.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
