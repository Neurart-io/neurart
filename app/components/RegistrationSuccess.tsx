"use client"

import { useState } from "react"
import { CheckCircle, Mail, RefreshCw } from "lucide-react"
import { T } from "./T"
import { useLocalization } from "../contexts/LocalizationContext"

interface RegistrationSuccessProps {
  email: string
  onClose: () => void
  onLogin?: () => void
}

export default function RegistrationSuccess({ email, onClose, onLogin }: RegistrationSuccessProps) {
  const { language } = useLocalization()
  const [isResending, setIsResending] = useState(false)
  const [resendSuccess, setResendSuccess] = useState(false)

  const handleResendEmail = () => {
    setIsResending(true)

    // Simular o reenvio do e-mail
    setTimeout(() => {
      setIsResending(false)
      setResendSuccess(true)

      // Resetar a mensagem de sucesso após alguns segundos
      setTimeout(() => {
        setResendSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="bg-[#181818] rounded-xl p-6 md:p-8 max-w-md w-full mx-auto text-center">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-[#b157ff]/20 rounded-full flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-[#b157ff]" />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">
        <T id="registration.success.title" />
      </h2>

      <p className="text-gray-300 mb-6">
        <T id="registration.success.message" />
      </p>

      <div className="bg-[#242424] rounded-lg p-4 mb-6 flex items-center">
        <Mail className="text-[#b157ff] mr-3 flex-shrink-0" size={20} />
        <div className="text-left">
          <p className="text-sm text-gray-300">
            <T id="registration.success.emailSent" />
          </p>
          <p className="text-white font-medium break-all">{email}</p>
        </div>
      </div>

      <div className="mb-6">
        <button
          onClick={handleResendEmail}
          disabled={isResending}
          className="text-[#b157ff] hover:text-[#9645d8] transition-colors flex items-center justify-center mx-auto"
        >
          {isResending ? (
            <>
              <RefreshCw className="animate-spin mr-2" size={16} />
              <T id="registration.success.resending" />
            </>
          ) : (
            <>
              <RefreshCw className="mr-2" size={16} />
              <T id="registration.success.resend" />
            </>
          )}
        </button>

        {resendSuccess && (
          <p className="text-green-500 text-sm mt-2">
            <T id="registration.success.resendSuccess" />
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onClose}
          className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-[#242424] transition-colors"
        >
          <T id="registration.success.close" />
        </button>

        {onLogin && (
          <button
            onClick={onLogin}
            className="px-4 py-2 bg-[#b157ff] text-white rounded-lg hover:bg-[#9645d8] transition-colors"
          >
            <T id="registration.success.login" />
          </button>
        )}
      </div>
    </div>
  )
}

