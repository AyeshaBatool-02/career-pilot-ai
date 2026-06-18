import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "CareerPilot AI — Smart Career & Internship Tracker",
  description:
    "Track internships, jobs, and career goals in one clean dashboard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}
        <Toaster />
      </body>
    </html>
  );
}
