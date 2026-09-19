"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "cc-cookie-consent"

type ConsentValue = "accepted" | "rejected"

declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

function gtag(..._args: unknown[]) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || []
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
}

function updateConsent(granted: boolean) {
  gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
  })

  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: granted ? "consent_accepted" : "consent_rejected",
      consent_status: granted ? "granted" : "denied",
    })
  }
}

function loadGTM(gtmId: string) {
  if (document.getElementById("gtm-script")) return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
  const script = document.createElement("script")
  script.id = "gtm-script"
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
  document.head.appendChild(script)
}

export function CookieConsent({ gtmId }: { gtmId: string }) {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    let stored: string | null = null
    try {
      stored = localStorage.getItem(STORAGE_KEY)
    } catch {
      stored = null
    }

    if (stored === "accepted") {
      updateConsent(true)
      loadGTM(gtmId)
    } else if (stored !== "rejected") {
      setVisible(true)
    }
  }, [gtmId])

  const setConsent = (value: ConsentValue) => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // localStorage indisponível (modo privado, etc.) — o banner volta a aparecer na próxima visita
    }
    updateConsent(value === "accepted")
    if (value === "accepted") {
      loadGTM(gtmId)
    }
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          role="dialog"
          aria-live="polite"
          aria-label="Consentimento de cookies"
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#E5E5E5] shadow-xl overflow-hidden">
            <div className="p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#C0111F]/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-[#C0111F]" />
              </div>

              <div className="flex-1">
                <p className="text-sm text-[#0D0D0D] leading-relaxed">
                  Usamos cookies para melhorar sua experiência e analisar o tráfego do site (Google Tag Manager/Analytics).
                  Cookies não essenciais só são ativados com o seu consentimento. Saiba mais na nossa{" "}
                  <a href="/politica-de-privacidade/" className="text-[#C0111F] font-medium hover:underline">
                    Política de Privacidade
                  </a>
                  .
                </p>

                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 text-xs text-[#606060] leading-relaxed space-y-2 border-t border-[#F0F0F0] pt-3">
                        <p>
                          <span className="font-semibold text-[#0D0D0D]">Cookies necessários:</span> essenciais para o
                          funcionamento do site. Não podem ser desativados.
                        </p>
                        <p>
                          <span className="font-semibold text-[#0D0D0D]">Cookies de analytics:</span> Google Tag
                          Manager e Google Analytics, usados para entender como o site é utilizado. Só são carregados
                          após seu consentimento.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="button"
                  onClick={() => setShowDetails((s) => !s)}
                  className="text-xs text-[#606060] hover:text-[#C0111F] underline mt-2 cursor-pointer"
                >
                  {showDetails ? "Ocultar detalhes" : "Ver detalhes"}
                </button>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0 w-full md:w-auto">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setConsent("rejected")}
                  className="flex-1 md:flex-none border-[#E5E5E5] text-[#606060] hover:text-[#0D0D0D] hover:bg-[#F5F5F5]"
                >
                  Recusar
                </Button>
                <Button
                  type="button"
                  onClick={() => setConsent("accepted")}
                  className="flex-1 md:flex-none bg-[#C0111F] hover:bg-[#a00e1a] text-white font-semibold"
                >
                  Aceitar
                </Button>
                <button
                  type="button"
                  onClick={() => setConsent("rejected")}
                  aria-label="Fechar e recusar cookies"
                  className="hidden md:flex w-8 h-8 rounded-lg items-center justify-center text-[#909090] hover:text-[#0D0D0D] hover:bg-[#F5F5F5] transition-colors cursor-pointer flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
