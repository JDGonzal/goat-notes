import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "GOAT Notes",
  description:
    "Build a Full Stack AI Note Taking App with Next.js and Supabase – Tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}
