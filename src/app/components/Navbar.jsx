
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png"   // 👉 ekhane tomar uploaded logo file
            alt="Book Logo"
            width={90}
            height={80}
          />
          
        </Link>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <Link href="/" className="px-5 py-2 rounded-xl bg-black hover:bg-black transition text-white">Home</Link>
          <Link href="/books" className="px-5 py-2 rounded-xl bg-black hover:bg-black transition text-white">All Books</Link>
          <Link href="/profile" className="px-5 py-2 rounded-xl bg-black hover:bg-black transition text-white">My Profile</Link>
        </div>

        {/* Login Button */}
        <Link
          href="/login"
          className="px-5 py-2 rounded-xl bg-black hover:bg-black transition text-white"
        >
          Login
        </Link>
      </div>
    </div>
  );
}