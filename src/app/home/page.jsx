
import Banner from "@/components/Banner.jsx";

const HomePage = () => {
  return (
    <div className="space-y-16">

      {/* Banner (only Home) */}
      <Banner />

      {/* Featured Books Section */}
      <section className="text-center text-white">
        <h2 className="text-3xl font-bold mb-6">
          Featured Books
        </h2>

        <div className="grid md:grid-cols-4 gap-6 px-6">
          <div className="bg-white/10 p-4 rounded-xl">Book 1</div>
          <div className="bg-white/10 p-4 rounded-xl">Book 2</div>
          <div className="bg-white/10 p-4 rounded-xl">Book 3</div>
          <div className="bg-white/10 p-4 rounded-xl">Book 4</div>
        </div>
      </section>

      {/* Extra Section 1 */}
      <section className="text-center text-white px-6">
        <h2 className="text-3xl font-bold mb-4">
          Why Choose Us
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Fast book search, easy borrowing, and a modern digital library experience.
        </p>
      </section>

      {/* Extra Section 2 */}
      <section className="text-center text-white px-6">
        <h2 className="text-3xl font-bold mb-4">
          Popular Categories
        </h2>

        <div className="flex justify-center gap-4">
          <span className="bg-blue-500 px-4 py-2 rounded-xl">Story</span>
          <span className="bg-green-500 px-4 py-2 rounded-xl">Tech</span>
          <span className="bg-purple-500 px-4 py-2 rounded-xl">Science</span>
        </div>
      </section>

    </div>
  );
};

export default HomePage;