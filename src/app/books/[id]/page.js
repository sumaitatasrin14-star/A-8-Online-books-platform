"use client";

import { useContext, use } from "react";
import { useRouter } from "next/navigation";
import books from "@/data/books.json";
import PrivateRoute from "@/components/PrivateRoute";
import { AuthContext } from "@/context/AuthContext";
import { toast } from "react-toastify";
import Image from "next/image";

export default function BookDetails({ params }) {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  // ✅ FIX HERE
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const book = books.find((b) => b.id == id);

  const handleBorrow = () => {
    if (!user) {
      toast.error("Please login first 🔒");
      router.push("/login");
      return;
    }

    toast.success("Book borrowed successfully 🎉");
  };

  if (!book) {
    return (
      <div className="text-white flex items-center justify-center min-h-screen">
        Book not found 😢
      </div>
    );
  }

  return (
    <PrivateRoute>
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">

        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 bg-white/10 p-8 rounded-2xl">

          <Image
            src={book.image_url}
            width={350}
            height={500}
            alt={book.title}
            className="rounded-xl"
          />

          <div>
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <p>{book.author}</p>
            <p>{book.category}</p>

            <p className="mt-4 text-gray-400">
              {book.description}
            </p>

            <p className="mt-4 text-green-400">
              {book.quantity} copies left
            </p>

            <button
              onClick={handleBorrow}
              className="mt-6 bg-blue-600 px-5 py-2 rounded-lg"
            >
              Borrow This Book
            </button>
          </div>

        </div>

      </div>
    </PrivateRoute>
  );
}