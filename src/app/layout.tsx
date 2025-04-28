import type { Metadata } from "next";
import { libreFranklin } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Ping coming soon page",
  description: "A Frontend Mentor challenge project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libreFranklin.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
