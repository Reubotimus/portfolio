import type { Metadata } from "next";
import "./globals.css";
import NavBarResp from "./components/NavBarResp";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>
          <div className="px-10">
            <NavBarResp />
            {children}
            <Analytics />
            <div className="py-10 text-center bottom-0">
              <footer>
                Site built with Nextjs, Typescript & Tailwind CSS. © 2025.
              </footer>
              <p className="text-xs">Last update: 28/01/2025</p>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
