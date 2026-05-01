import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center py-16">

      {/* Left Text */}
      <div>
        <p className="text-black uppercase tracking-widest mb-2">
          Welcome to BookSphere
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black">
          Find Your Next <br />
          <span className="text-black">Read</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-md">
          A digital platform to explore, borrow and enjoy thousands of books anytime, anywhere.
        </p>

        <Link
          href="/books"
          className="inline-block mt-8 px-6 py-3 bg-black hover:bg-black rounded-xl transition text-white"
        >
          Browse Books →
        </Link>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <Image
          src="/books.png"  // 👉 optional hero image
          alt="Books"
          width={400}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}