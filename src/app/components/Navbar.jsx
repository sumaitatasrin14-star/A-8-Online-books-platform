"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Book Logo" width={90} height={80} />
        </Link>

        <div className="hidden md:flex gap-8 text-gray-300">
          <Link href="/" className="px-5 py-2 rounded-xl bg-black text-white">Home</Link>
          <Link href="/books" className="px-5 py-2 rounded-xl bg-black text-white">All Books</Link>
          <Link href="/profile" className="px-5 py-2 rounded-xl bg-black text-white">My Profile</Link>
        </div>

        {user ? (
          <div className="flex items-center gap-3">
            <span className="text-white">{user.displayName}</span>
            <button
              onClick={logout}
              className="px-5 py-2 rounded-xl bg-red-600 text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="px-5 py-2 rounded-xl bg-black text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}