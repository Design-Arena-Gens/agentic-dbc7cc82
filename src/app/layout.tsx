import "@/app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: "Shogun CRM | Control total para academias de artes marciales",
  description:
    "Gestión integral de alumnos, mensualidades, torneos y más en una plataforma CRM creada para senseis y maestros de artes marciales."
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="relative min-h-screen overflow-x-hidden font-sans">
        <div className="noise-overlay" />
        <div className="pointer-events-none fixed inset-0 bg-grid-glow opacity-80 blur-3xl" />
        <div className="relative z-10">{children}</div>
        <SpeedInsights />
      </body>
    </html>
  );
}
