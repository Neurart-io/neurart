"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";
import { useLocalization } from "../contexts/LocalizationContext";
import { T } from "../components/T";
import OffCanvasMenu from "../components/OffCanvasMenu";
import AuthenticatedHeader from "../components/AuthenticatedHeader";

export default function SupportPage() {
  const { language } = useLocalization();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", { name, email, subject, message });
    setSubmitted(true);
    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div
      className="min-h-screen bg-[#101010] text-white"
      style={{ fontFamily: "'Kode Mono', monospace" }}
    >
      <AuthenticatedHeader
        onOpenOffCanvas={() => setIsOffCanvasOpen(true)}
        isOffCanvasOpen={isOffCanvasOpen}
      />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          <T id="support.title" />
        </h1>

        <div className="max-w-2xl mx-auto bg-[#181818] p-6 rounded-lg shadow-lg">
          <p className="mb-6 text-gray-300">
            <T id="support.description" />
          </p>

          {submitted ? (
            <div className="text-green-500 text-center py-4">
              <T id="support.successMessage" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  <T id="support.name" />
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-[#242424] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  <T id="support.email" />
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-[#242424] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff]"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  <T id="support.subject" />
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-[#242424] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  <T id="support.message" />
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-[#242424] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#b157ff]"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-[#b157ff] text-white rounded-md hover:bg-[#9645d8] transition-colors"
                >
                  <T id="support.submit" />
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
      <OffCanvasMenu
        isOpen={isOffCanvasOpen}
        onClose={() => setIsOffCanvasOpen(false)}
      />
    </div>
  );
}
