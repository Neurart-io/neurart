"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, X } from "lucide-react";
import { T } from "./T";
import { Work_Sans } from "next/font/google";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const workSans = Work_Sans({ subsets: ["latin"] });

interface RegistrationPopupProps {
  onClose: () => void;
}

type FormType = "register" | "login" | "forgotPassword";

export default function RegistrationPopup({ onClose }: RegistrationPopupProps) {
  const [formType, setFormType] = useState<FormType>("register");
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "visible";
    };
  }, []);

  const toggleForm = (type: FormType) => {
    setFormType(type);
    setErrorMessage("");
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);
  };

  // Função para autenticação com Google
  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        setErrorMessage(error.message);
      }
    } catch (err) {
      setErrorMessage("Erro ao conectar com Google. Tente novamente.");
      console.error("Erro de autenticação com Google:", err);
    }
  };

  // Função para login com email/senha
  const handleEmailSignIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMessage(error.message);
        return false;
      }

      // Sucesso - fechar o popup e redirecionar
      handleClose();
      router.push("/gerar-imagem");
      router.refresh();
      return true;
    } catch (err) {
      setErrorMessage("Erro ao fazer login. Verifique suas credenciais.");
      console.error("Erro de login:", err);
      return false;
    }
  };

  // Função para registro com email/senha
  const handleEmailSignUp = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        setErrorMessage(error.message);
        return false;
      }

      // Sucesso - mostrar mensagem e mudar para tela de login
      setErrorMessage("Verifique seu email para confirmar o cadastro!");
      toggleForm("login");
      return true;
    } catch (err) {
      setErrorMessage("Erro ao criar conta. Tente novamente.");
      console.error("Erro de registro:", err);
      return false;
    }
  };

  // Função para recuperação de senha
  const handlePasswordReset = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/callback?reset=true`,
      });

      if (error) {
        setErrorMessage(error.message);
        return false;
      }

      // Sucesso
      setErrorMessage(
        "Email de recuperação enviado! Verifique sua caixa de entrada."
      );
      return true;
    } catch (err) {
      setErrorMessage("Erro ao solicitar recuperação de senha.");
      console.error("Erro de recuperação de senha:", err);
      return false;
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md"
        onClick={handleClose}
      ></div>
      <div
        className={`bg-[#101010] rounded-3xl overflow-hidden w-[90%] max-w-[1200px] max-h-[90vh] flex ${
          workSans.className
        } relative shadow-2xl shadow-purple-500/20 transition-all duration-300 ${
          isVisible && !isClosing
            ? "scale-100 opacity-100"
            : "scale-90 opacity-0"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Left side - Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-10 overflow-y-auto">
          <div className="w-full max-w-[440px]">
            <h2 className="text-2xl font-extrabold text-center mb-4 text-white">
              <T
                id={
                  formType === "register"
                    ? "cadastro.titulo"
                    : formType === "login"
                    ? "login.titulo"
                    : "forgotPassword.title"
                }
              />
            </h2>

            {/* Mensagem de erro ou sucesso */}
            {errorMessage && (
              <div
                className={`mb-4 p-3 rounded-md text-sm ${
                  errorMessage.includes("Verifique")
                    ? "bg-green-900/50 border border-green-700 text-white"
                    : "bg-red-900/50 border border-red-700 text-white"
                }`}
              >
                {errorMessage}
              </div>
            )}

            {formType !== "forgotPassword" && (
              <>
                {/* Auth Buttons */}
                <div className="space-y-2 mb-3">
                  {/* Google button */}
                  <button
                    onClick={handleGoogleSignIn}
                    className="w-full flex items-center py-2 px-3 rounded-lg bg-[#181818] text-sm text-white hover:bg-[#242424] transition-colors duration-300 border border-gray-800 h-10"
                  >
                    <svg className="w-4 h-4 mr-3" viewBox="0 0 24 24">
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

                  {/* Email section label */}
                  <div className="relative flex justify-center text-sm mt-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-800"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-[#101010] text-gray-500 uppercase font-medium">
                        OU
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {formType === "register" && (
              <RegistrationForm
                onLoginClick={() => toggleForm("login")}
                onRegister={handleEmailSignUp}
              />
            )}

            {formType === "login" && <LoginForm onLogin={handleEmailSignIn} />}

            {formType === "forgotPassword" && (
              <ForgotPasswordForm onPasswordReset={handlePasswordReset} />
            )}

            <div className="mt-4 text-center text-sm text-gray-400">
              {formType === "register" && (
                <>
                  <T id="cadastro.possuiConta" />{" "}
                  <button
                    onClick={() => toggleForm("login")}
                    className="font-medium text-[#b157ff] hover:text-[#9645d8]"
                  >
                    <T id="cadastro.entrar" />
                  </button>
                </>
              )}
              {formType === "login" && (
                <>
                  <T id="login.semConta" />{" "}
                  <button
                    onClick={() => toggleForm("register")}
                    className="font-medium text-[#b157ff] hover:text-[#9645d8]"
                  >
                    <T id="login.registrar" />
                  </button>
                </>
              )}
              {formType === "login" && (
                <div className="mt-2">
                  <button
                    onClick={() => toggleForm("forgotPassword")}
                    className="font-medium text-[#b157ff] hover:text-[#9645d8]"
                  >
                    <T id="login.esqueceuSenha" />
                  </button>
                </div>
              )}
              {formType === "forgotPassword" && (
                <button
                  onClick={() => toggleForm("login")}
                  className="font-medium text-[#b157ff] hover:text-[#9645d8]"
                >
                  <T id="forgotPassword.backToLogin" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div
          className="hidden md:block w-1/2 relative"
          style={{ minHeight: "680px" }}
        >
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
      </div>
    </div>
  );
}
