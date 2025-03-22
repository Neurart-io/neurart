"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { Work_Sans } from "next/font/google";
import { T } from "../components/T";
import { login } from "./actions";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
const workSans = Work_Sans({ subsets: ["latin"] });

export default async function LoginPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useScrollToTop();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simple validation
    if (!email || !password) {
      setError("Please enter both email and password");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    login(formData);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-[#101010]"
      style={{ fontFamily: "'Kode Mono', monospace" }}
    >
      {/* Navigation */}
      <header className="py-4 bg-[#101010]/80 backdrop-blur-sm">
        <div className="flex justify-between items-center px-[5%]">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20Branco-Icu0fjwiD8ffrMcMzvPk9Bmc7nNuHq.png"
              alt="Neurart Logo"
              width={46}
              height={16}
              className="object-contain"
              priority
            />
            <span className="ml-3 text-white text-lg">Neurart.io</span>
            <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-[#2478ff] rounded-full">
              Beta
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main
        className={`flex-grow flex items-center justify-center px-4 ${workSans.className}`}
      >
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            <T id="login.titulo" />
          </h2>
          {error && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded-md text-white text-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                <T id="login.email" />
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-[#181818] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff] pl-10"
                  required
                />
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                <T id="login.senha" />
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-[#181818] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff] pl-10 pr-10"
                  required
                />
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#b157ff] focus:ring-[#b157ff] border-gray-700 rounded bg-[#181818]"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-300"
                >
                  <T id="login.lembrar" />
                </label>
              </div>
              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium text-[#b157ff] hover:text-[#9645d8]"
                >
                  <T id="login.esqueceuSenha" />
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-[#b157ff] text-white py-2 px-4 rounded-md hover:bg-[#9645d8] transition-colors duration-300 ${
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
                    <T id="login.loading" />
                  </span>
                ) : (
                  <T id="login.botao" />
                )}
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#101010] text-gray-400">
                  <T id="login.ou" />
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="w-full flex justify-center items-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-[#181818] text-sm font-medium text-gray-300 hover:bg-[#242424]">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.70492L1.275 6.60992C0.46 8.22992 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  />
                </svg>
                <span className="ml-2">
                  <T id="login.google" />
                </span>
              </button>
              <button className="w-full flex justify-center items-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-[#181818] text-sm font-medium text-gray-300 hover:bg-[#242424]">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                </svg>
                <span className="ml-2">
                  <T id="login.apple" />
                </span>
              </button>
              <button className="w-full flex justify-center items-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-[#181818] text-sm font-medium text-gray-300 hover:bg-[#242424]">
                <Mail size={20} />
                <span className="ml-2">
                  <T id="login.emailButton" />
                </span>
              </button>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-gray-400">
            <T id="login.semConta" />{" "}
            <Link
              href="/registro"
              className="font-medium text-[#b157ff] hover:text-[#9645d8]"
            >
              <T id="login.registrar" />
            </Link>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4" style={{ fontFamily: "'Kode Mono', monospace" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-center items-center gap-6">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20Branco-Icu0fjwiD8ffrMcMzvPk9Bmc7nNuHq.png"
                alt="Neurart Logo"
                width={32}
                height={11}
                className="object-contain"
                priority
              />
              <span className="text-lg font-bold ml-2 text-white">
                Neurart.io
              </span>
            </Link>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/neurart.io/"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/neurart-io/?viewAsMember=true"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
