"use client";

import { useState } from "react";
import books from "@/data/books.json";
import Link from "next/link";

export default function AllBooksPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // 🔁 Toggle function
  const handleCategory = (cat) => {
    if (category === cat) {
      setCategory("All"); // toggle off
    } else {
      setCategory(cat);
    }
  };

  // 🔍 Filter logic
  const filteredBooks = books.filter((book) => {
    const matchSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || book.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="w-full mx-auto px-4 py-1 text-white">

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search books..."
        className="w-full p-4 mb-6 rounded-xl bg-black border border-white/20"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📌 STICKY CATEGORY BAR */}
      <div className="sticky top-0 z-50 bg-black/70 backdrop-blur-md py-4 mb-8">
        <div className="flex justify-center gap-4 flex-wrap">

          {["All", "Story", "Tech", "Science"].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-5 py-2 rounded-full transition ${
                category === cat
                  ? "bg-black shadow-lg shadow-blue-500/50"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>
      </div>

      {/* 📚 Books Grid */}
      <div className="grid md:grid-cols-4 gap-10 space-y-2">
        {filteredBooks.map((book) => (
          <div key={book.id} className="text-center">

            <img
              src={book.image_url}
              alt={book.title}
              className="h-100 w-full object-cover rounded-xl"
            />

            <h3 className="mt-3 text-black font-bold text-xl">
              {book.title}
            </h3>

            <Link href={`/books/${book.id}`}>
              <button className="mt-3 w-full bg-black py-2 rounded-lg hover:bg-gray-800">
                View Details
              </button>
            </Link>

          </div>
        ))}
      </div>

      {/* ❗ No result */}
      {filteredBooks.length === 0 && (
        <p className="text-center mt-10 text-gray-400">
          No books found 😢
        </p>
      )}

    </div>
  );
}