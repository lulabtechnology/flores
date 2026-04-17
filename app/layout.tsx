import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMORNFLOR | Floristería boutique",
  description:
    "AMORNFLOR diseña experiencias florales exclusivas para cumpleaños, bodas, aniversarios, graduaciones y eventos especiales.",
  openGraph: {
    title: "AMORNFLOR | Inspiración floral para momentos inolvidables",
    description:
      "Somos inspiración floral que satisface el gusto más exigente y exclusivo.",
    images: ["/images/hero/rosas-rosadas-premium.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
