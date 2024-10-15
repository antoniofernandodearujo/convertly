import type { Metadata } from "next";
import "./globals.css";
import { ButtonProvider } from "@/context/ButtonContenxt";

export const metadata: Metadata = {
  title: "Convertly",
  description: "Convertly offers seamless file conversion from PDF to Word, PDF to images, and more. Fast, simple, and efficient.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <ButtonProvider>{children}</ButtonProvider>
      </body>
    </html>
  );
}
