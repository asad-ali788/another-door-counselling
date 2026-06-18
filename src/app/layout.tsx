import type { Metadata } from "next";
import { Inter, Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

// Dev-only point-to-fix overlay. The import() lives inside the dev guard so the
// module is dead-code-eliminated from production builds entirely.
const PointHelper =
  process.env.NODE_ENV === "development"
    ? dynamic(() =>
        import("@/components/dev/PointHelper").then((m) => m.PointHelper)
      )
    : null;

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Another Door Counselling — Josh Brushett MBACP",
  description:
    "Warm, confidential online counselling with Josh Brushett (MBACP) for adults and young people (16+). Trauma-informed, LGBTQ+ affirming and neurodivergent-friendly. Free 15-minute consultation. Paving the path to mental wellbeing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${fraunces.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {PointHelper && <PointHelper />}
      </body>
    </html>
  );
}
