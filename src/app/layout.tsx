import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AntdProvider from "@/providers/AntdProviders";
import QueryProvider from "@/providers/QueryProviders";
import { AuthProvider } from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MedSync - Portal Telemedisin Terpadu",
  description: "Kelola konsultasi medis dan rekam kesehatan Anda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <AuthProvider>
            <AntdProvider>{children}</AntdProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
