"use client";

import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import PrivateRoute from "@/components/PrivateRoute";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function Profile() {
  const { user, logout, updateUserProfile, dark, toggleTheme } =
    useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [Email, setEmail] = useState(user?.email || "");

  const handleUpdate = () => {
    updateUserProfile(name, Email)
      .then(() => toast.success("Profile Updated"))
      .catch(() => toast.error("Update Failed"));
  };

  return (
    <PrivateRoute>
      <div
        className={`min-h-screen p-6 ${
          dark ? "bg-gray-950 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">My Dashboard</h1>

            <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Toggle Theme
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* PROFILE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 p-6 rounded-2xl text-center"
            >
              <div className="flex justify-center">
  <div className="p-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
    
    <Image
      src={user?.photoURL || "/default.png"}
      width={90}
      height={90}
      alt=""
     className="rounded-full object-cover border-4 border-black shadow-lg 
           hover:scale-105 transition duration-300"
    />

  </div>
</div>

              <h2 className="mt-3 text-xl font-bold">
                {user?.displayName}
              </h2>

              <p className="text-gray-400">{user?.email}</p>

              <button
                onClick={() => logout()}
                className="mt-4 bg-red-500 px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </motion.div>

            {/* RIGHT SIDE */}
            <div className="md:col-span-2 space-y-6">

              {/* EDIT PROFILE */}
              <div className="bg-white/10 p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-3">Edit Profile</h2>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 mb-2 text-White border-2"
                  placeholder="Name"
                />

                <input
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 mb-2 text-white border-2"
                  placeholder="Email"
                />

                <button
                  onClick={handleUpdate}
                  className="bg-green-500 px-4 py-2 rounded-lg"
                >
                  Save
                </button>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4">

                <div className="bg-white/10 p-4 rounded-xl">
                  <p>Books</p>
                  <h2 className="text-2xl font-bold">12</h2>
                </div>

                <div className="bg-white/10 p-4 rounded-xl">
                  <p>Login</p>
                  <h2 className="text-2xl font-bold">5</h2>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}