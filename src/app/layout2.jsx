import { Inter } from "next/font/google";
import Footer from "@/components/common/Footer";
import "@/styles/globals.css";
import { AdminLayout } from "@/components/layout/AdminLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Creative Digital Agency",
  description: "당신의 브랜드를 위한 최고의 솔루션",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <AdminLayout>
          <main className="min-h-screen pt-20">{children}</main>
        </AdminLayout>
        <Footer />
      </body>
    </html>
  );
}
