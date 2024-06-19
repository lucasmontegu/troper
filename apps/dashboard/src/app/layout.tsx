import "../styles/globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";

import Provider from "@/components/provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@troper/ui/components/sonner";
import { cn } from "@/lib/utils"

import { Inter } from "next/font/google";
import ModalProvider from "@/components/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tropper Dashboard",
  description: "Create and manage your Tropper account.",
  metadataBase: new URL("https://starter.rasmic.xyz"),
  /* title: {
    default: 'Nextjs Starter Kit',
    template: `%s | Nextjs Starter Kit`
  }, */
  openGraph: {
    description: "Build your next SAAS product",
    images: [""],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextjs Starter ",
    description: "Build your next SAAS product.",
    siteId: "",
    creator: "@rasmic",
    creatorId: "",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
        className={inter.className}
        >
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <ModalProvider>
                {children}
                <Toaster />
              </ModalProvider>
            </ThemeProvider>
          </Provider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
