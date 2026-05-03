"use client";

import Banner from "@/components/Banner.jsx";


const HomePage = () => {
  return (
    <div className="bg-gray-950 text-white space-y-20 pb-20">

      {/* 🎬 HERO BANNER */}
      <Banner />

      
      

      {/* 🔥 MARQUEE (NOTICE BAR) */}
      <div className="bg-blue-600 py-3 text-center text-lg font-medium shadow-lg">
        <marquee>
          🚀 New Arrivals: Atomic Habits | Clean Code | The Alchemist |
          Special Discount on Memberships 🔥
        </marquee>
      </div>

      {/* ⭐ FEATURES SECTION */}
      <section className="max-w-6xl mx-auto text-center px-4">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">
          Why Choose <span className="text-blue-400">BookSphere</span>?
        </h2>

        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          A modern digital library platform designed for speed, simplicity, and convenience.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {[
            { icon: "🔍", title: "Fast Search", desc: "Quickly find books by title, category, or author." },
            { icon: "📚", title: "Easy Borrow", desc: "Borrow books instantly with one click." },
            { icon: "🔐", title: "Secure Login", desc: "Safe authentication with protected routes." },
            { icon: "📂", title: "Category Filter", desc: "Browse books easily by category." },
            { icon: "📱", title: "Responsive Design", desc: "Works perfectly on all devices." },
            { icon: "🌍", title: "24/7 Access", desc: "Access your library anytime, anywhere." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 hover:bg-white/10 transition duration-300 shadow-md"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default HomePage;