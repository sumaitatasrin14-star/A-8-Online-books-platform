import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar.jsx";
import { AuthProvider } from "@/context/AuthContext"; // ✅ ADD THIS
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/footer";
import { title } from "framer-motion/client";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  icons: {
    title: "BookSphere - Your Digital Library",
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        {/* 🔥 WRAP EVERYTHING */}
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
        <ToastContainer position="top-right" />
        <Footer></Footer>
      </body>
    </html>
  );
}
