"use client";

import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Login() {
  const { login, googleLogin } = useContext(AuthContext);
  const router = useRouter();

  const [error, setError] = useState("");

  // 🔑 Email Login
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        toast.success("Login Successful 🎉");
        router.push("/");
      })
      .catch((err) => {
        toast.error("Login Failed ❌");
        setError(err.message);
      });
  };

  // 🔑 Google Login (FIXED)
  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("Google Login Successful 🎉");
        router.push("/");
      })
      .catch(() => {
        toast.error("Google Login Failed ❌");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
        
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {/* FORM */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          
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

          <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold">
            Login
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

        {/* GOOGLE LOGIN */}
        <button
          onClick={handleGoogle}
          className="w-full bg-red-500 hover:bg-red-600 p-3 rounded-lg font-semibold"
        >
          Login with Google
        </button>

        {/* Register link */}
        <p className="mt-5 text-center text-gray-300">
          New user?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-blue-400 cursor-pointer"
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}