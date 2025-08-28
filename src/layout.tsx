import type { Metadata } from "next";
import "./globals.scss";



export const metadata: Metadata = {
  title: "portfolio M.Govorukhina",
  description: "web-developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
