import Banner from "@/components/Banner";import books from "@/data/books.json";

export default function Home() {
  const featuredBooks = books.slice(0, 4);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner></Banner>
      {/* Featured Books */}
      <section className="text-black text-center">
        <h2 className="text-3xl font-bold mb-6">
          Featured Books
        </h2>

        <div className="grid md:grid-cols-4 gap-6 px-6">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:scale-105 transition"
            >
              <img
                src={book.image_url}
                alt={book.title}
                className="h-40 w-full object-cover rounded-xl mb-3"
              />

              <h3 className="font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-400">{book.author}</p>

              <span className="text-xs text-blue-400">
                {book.category}
              </span>

              <button className="mt-3 w-full bg-black py-1 rounded-lg text-white">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-10 px-3 bg-white dark:bg-black sm:items-start">
         <section className="max-w-6xl mx-auto text-center text-white mt-5">

  {/* Title */}
  <h2 className="text-4xl font-bold px[-10px] mb-4">
   <span className="text-black">Why Choose BookSphere</span>?
  </h2>

  <p className="text-gray-400 mb-12 max-w-xl mx-auto">
    A modern digital library platform designed for speed, simplicity, and convenience.
  </p>

  {/* Feature Cards */}
  <div className="grid md:grid-cols-3 gap-6">

    {/* Card 1 */}
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition">
      <div className="text-3xl mb-3">🔍</div>
      <h3 className="text-xl font-semibold">Fast Search</h3>
      <p className="text-gray-400 text-sm mt-2">
        Quickly find books by title, category, or author.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition">
      <div className="text-3xl mb-3">📚</div>
      <h3 className="text-xl font-semibold">Easy Borrow</h3>
      <p className="text-gray-400 text-sm mt-2">
        Borrow books instantly with one click.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition">
      <div className="text-3xl mb-3">🔐</div>
      <h3 className="text-xl font-semibold">Secure Login</h3>
      <p className="text-gray-400 text-sm mt-2">
        Safe authentication with protected routes.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition">
      <div className="text-3xl mb-3">📂</div>
      <h3 className="text-xl font-semibold">Category Filter</h3>
      <p className="text-gray-400 text-sm mt-2">
        Browse books easily by category.
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition">
      <div className="text-3xl mb-3">📱</div>
      <h3 className="text-xl font-semibold">Responsive Design</h3>
      <p className="text-gray-400 text-sm mt-2">
        Works perfectly on mobile, tablet, and desktop.
      </p>
    </div>

    {/* Card 6 */}
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition">
      <div className="text-3xl mb-3">🌍</div>
      <h3 className="text-xl font-semibold">24/7 Access</h3>
      <p className="text-gray-400 text-sm mt-2">
        Access your library anytime, anywhere.
      </p>
    </div>

  </div>
</section>
      </main>
    </div>
  );
}
