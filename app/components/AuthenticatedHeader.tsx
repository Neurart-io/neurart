"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";
import { useLocalization } from "@/app/contexts/LocalizationContext";
import OffCanvasMenu from "./OffCanvasMenu";
import { createClient } from "@/utils/supabase/client";
import { useRouter, usePathname } from "next/navigation";

export default function AuthenticatedHeader() {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { language } = useLocalization();
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();

  // Função para obter a primeira letra do email do usuário
  const getUserInitial = () => {
    if (user && user.email && user.email.length > 0) {
      return user.email[0].toUpperCase();
    }
    return "U"; // Fallback
  };

  // Verificação segura do avatar
  const hasAvatar =
    user &&
    user.user_metadata &&
    user.user_metadata.avatar_url &&
    user.user_metadata.avatar_url.length > 0;

  const avatarUrl = hasAvatar ? user.user_metadata.avatar_url : null;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUser(user);
      }
    };
    getUser();
  }, []);

  // Função auxiliar para determinar se um link está ativo
  const isLinkActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="py-4 px-6 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20Branco-Icu0fjwiD8ffrMcMzvPk9Bmc7nNuHq.png"
              alt="Neurart Logo"
              width={36}
              height={12}
              className="object-contain"
              priority
            />
            <span className="ml-3 text-white text-lg">Neurart.io</span>
            <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-[#2478ff] rounded-full">
              Beta
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link
            href="/gerar-imagem"
            className={`${
              isLinkActive("/gerar-imagem")
                ? "text-white font-medium"
                : "text-gray-400"
            } hover:text-gray-300 transition-colors`}
          >
            {language === "pt" ? "Renderizar" : "Render"}
          </Link>
          <Link
            href="/minhas-imagens"
            className={`${
              isLinkActive("/minhas-imagens")
                ? "text-white font-medium"
                : "text-gray-400"
            } hover:text-gray-300 transition-colors`}
          >
            {language === "pt" ? "Minhas Imagens" : "My Images"}
          </Link>
          <Link
            href="/suporte"
            className={`${
              isLinkActive("/suporte")
                ? "text-white font-medium"
                : "text-gray-400"
            } hover:text-gray-300 transition-colors`}
          >
            {language === "pt" ? "Suporte" : "Support"}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={
              language === "pt"
                ? "https://discord.gg/Qf5FeM6t"
                : "https://discord.gg/7g64e3wH"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#5865F2] text-white hover:bg-[#4752C4] transition-all duration-300 hover:scale-110"
          >
            <svg
              width="20"
              height="15"
              viewBox="0 0 71 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                fill="currentColor"
              />
            </svg>
          </a>

          <button
            onClick={() => setIsOffCanvasOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#242424] text-white hover:bg-[#333333] transition-colors"
          >
            {/* Avatar do usuário ou inicial do email */}
            {avatarUrl ? (
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src={avatarUrl}
                  alt="User avatar"
                  width={24}
                  height={24}
                  className="object-cover w-full h-full"
                />
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full bg-[#2478ff] flex items-center justify-center">
                <span className="text-white font-medium text-xs">
                  {getUserInitial()}
                </span>
              </div>
            )}
            <span className="text-sm">My Account</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60"
            >
              <path
                d="M8 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </header>

      <OffCanvasMenu
        isOpen={isOffCanvasOpen}
        onClose={() => setIsOffCanvasOpen(false)}
        onLogout={handleLogout}
        user={user}
      />
    </>
  );
}
