"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { Work_Sans } from "next/font/google";
import { T } from "../components/T";
import { useRouter } from "next/navigation";
import { signup } from "../login/actions";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function RegistroPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useScrollToTop();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simple validation
    if (!email || !password) {
      setError("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    signup(formData);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-[#101010] overflow-hidden"
      style={{ fontFamily: "'Kode Mono', monospace" }}
    >
      {/* Main Content */}
      <main className={`min-h-screen flex ${workSans.className}`}>
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-extrabold text-center mb-8 text-white">
              <T id="cadastro.titulo" />
            </h2>

            {/* Auth Buttons */}
            <div className="space-y-3 mb-6">
              {/* Google button */}
              <button className="w-full flex items-center py-2 px-3 rounded-lg bg-[#181818] text-sm text-white hover:bg-[#242424] transition-colors duration-300 border border-gray-800 h-10">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>

              {/* Email button */}
              <button className="w-full flex items-center py-2 px-3 rounded-lg bg-[#181818] text-sm text-white hover:bg-[#242424] transition-colors duration-300 border border-gray-800 h-10">
                <Mail size={20} className="mr-3" />
                Continue with Email
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#101010] text-gray-500 uppercase text-xs font-medium">
                  OR
                </span>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded-md text-white text-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@host.com"
                  className="w-full px-3 py-2 bg-[#181818] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff] placeholder-gray-500 text-sm h-10"
                  required
                />
              </div>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-3 py-2 bg-[#181818] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff] placeholder-gray-500 text-sm h-10"
                  required
                />
              </div>
              <div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="w-full px-3 py-2 bg-[#181818] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff] placeholder-gray-500 text-sm h-10"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-[#181818] text-white py-2 px-3 rounded-lg hover:bg-[#242424] transition-colors duration-300 border border-gray-700 h-10 ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <T id="cadastro.loading" />
                    </span>
                  ) : (
                    "Continue"
                  )}
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-gray-400">
              <T id="cadastro.possuiConta" />{" "}
              <Link
                href="/login"
                className="font-medium text-[#b157ff] hover:text-[#9645d8]"
              >
                <T id="cadastro.entrar" />
              </Link>
            </p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-sing-up.jpg-DEUJ6DDQIqaCJuNseZQpZil211NvKj.jpeg"
            alt="Fantasy castle with lightning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />{" "}
          {/* Subtle overlay */}
        </div>
      </main>
    </div>
  );
}
