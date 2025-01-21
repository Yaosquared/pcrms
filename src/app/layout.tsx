import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import { ThemeProvider } from "./ui/theme-provider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "PCRMS",
  description: "Client Side of Pet Carrier Rental Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              className: "dark:bg-[#121212] dark:text-white",
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
