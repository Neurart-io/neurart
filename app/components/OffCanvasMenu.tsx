"use client";

import { useEffect } from "react";
import Link from "next/link";
import { LogOut, CreditCard, Settings, BookOpen } from "lucide-react";
import { useLocalization } from "../contexts/LocalizationContext";
import { T } from "./T";

interface OffCanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  user: any;
}

export default function OffCanvasMenu({
  isOpen,
  onClose,
  onLogout,
  user,
}: OffCanvasMenuProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const { language } = useLocalization();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-4 top-4 w-80 rounded-xl bg-[#1a1b1e] shadow-lg transform transition-transform duration-300 ease-in-out">
        {/* User Profile Section */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-[#2478ff] rounded-full flex items-center justify-center">
              <span className="text-white font-medium">V</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">
                Hi, Neurarter
              </div>
              <div className="text-xs text-gray-400">{user.email}</div>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="p-2">
          {/* Navigation Links */}
          <Link
            href="/assinatura"
            className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <CreditCard size={18} className="text-gray-400" />
            <span className="text-sm text-gray-200">
              <T id="myAccount.subscription" />
            </span>
          </Link>

          <Link
            href="/settings"
            className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Settings size={18} className="text-gray-400" />
            <span className="text-sm text-gray-200">
              <T id="myAccount.settings" />
            </span>
          </Link>

          <Link
            href="/learning"
            className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <BookOpen size={18} className="text-gray-400" />
            <span className="text-sm text-gray-200">
              {language === "pt" ? "Aprendizagem" : "Learning"}
            </span>
          </Link>

          <button
            onClick={() => {
              onLogout();
            }}
            className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors text-red-400"
          >
            <LogOut size={18} />
            <span className="text-sm">
              <T id="myAccount.logout" />
            </span>
          </button>
        </div>

        {/* Footer */}
        <div className="p-2 border-t border-gray-800 mt-2"></div>
      </div>
    </div>
  );
}
