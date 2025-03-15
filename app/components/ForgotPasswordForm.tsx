"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { T } from "./T"

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isFormStarted, setIsFormStarted] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsFormStarted(email.trim() !== "")
  }, [email])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simple validation
    if (!email) {
      setError("Please enter your email address")
      setIsLoading(false)
      return
    }

    // Simulate password reset process
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      // Handle password reset request
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="text-center">
        <p className="text-green-400 mb-4">
          <T id="forgotPassword.successMessage" />
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      {error && (
        <div className="mb-4 p-2 bg-red-900/50 border border-red-700 rounded-md text-white text-sm">{error}</div>
      )}
      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@host.com"
          className="w-full px-3 py-2 bg-[#181818] border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#b157ff] placeholder-gray-500 placeholder:text-base h-10"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-3 rounded-lg transition-all duration-300 border h-10 text-sm ${
            isLoading
              ? "opacity-70 cursor-not-allowed bg-[#181818] text-white border-gray-700"
              : isFormStarted
                ? "bg-[#b157ff] text-white border-transparent hover:bg-[#9645d8] hover:shadow-[0_0_15px_rgba(177,87,255,0.5)] hover:blur-[0.5px]"
                : "bg-[#181818] text-white border-gray-700 hover:bg-[#242424]"
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <T id="login.loading" className="text-sm" />
            </span>
          ) : (
            <T id="forgotPassword.submit" />
          )}
        </button>
      </div>
    </form>
  )
}

