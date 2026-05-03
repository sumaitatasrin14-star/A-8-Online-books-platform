"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-gray-300 mt-20 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* ⭐ Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            📚 BookSphere
          </h2>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            A modern digital library platform to explore, borrow, and enjoy books anytime, anywhere.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/books" className="hover:text-white">All Books</Link></li>
            <li><Link href="/profile" className="hover:text-white">My Profile</Link></li>
            <li><Link href="/login" className="hover:text-white">Login</Link></li>
          </ul>
        </div>

        {/* 🌐 Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex gap-5 text-2xl">

            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-sky-400 transition">
              <FaTwitter />
            </a>

            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-white transition">
              <FaGithub />
            </a>

            <a href="#" className="hover:text-blue-600 transition">
              <FaLinkedin />
            </a>

          </div>

          <div className="mt-5 text-sm text-gray-400">
            📧 support@booksphere.com <br />
            📞 +880 1234 567890
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} BookSphere. All rights reserved.
      </div>

    </footer>
  );
}