"use client";

import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Register() {
  const { register, googleLogin } = useContext(AuthContext);
  const router = useRouter();

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    register(email, password)
      .then(() => {
        router.push("/login");
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => router.push("/"))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-lg bg-black/40 outline-none"
            required
          />

          <input
            name="photo"
            type="text"
            placeholder="Photo URL"
            className="p-3 rounded-lg bg-black/40 outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-black/40 outline-none"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg bg-black/40 outline-none"
            required
          />

          <button className="bg-green-600 hover:bg-green-700 p-3 rounded-lg font-semibold">
            Register
          </button>
        </form>

        {/* Error */}
        {error && (
          <p className="text-red-400 mt-3 text-sm text-center">
            {error}
          </p>
        )}

        {/* Divider */}
        <div className="my-5 text-center text-gray-400">
          or
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogle}
          className="w-full bg-red-500 hover:bg-red-600 p-3 rounded-lg font-semibold"
        >
          Continue with Google
        </button>

        {/* Login link */}
        <p className="mt-5 text-center text-gray-300">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-blue-400 cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}