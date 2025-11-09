import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tomorrow's Letter - A letter from your future self",
  description: "Answer deep questions about your struggles, fears, and dreams. Receive a letter from your future self — delivered when you need it most.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
