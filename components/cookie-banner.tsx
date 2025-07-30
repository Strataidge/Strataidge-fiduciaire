"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, Settings, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("strataidge-cookie-consent")
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(cookieConsent)
        setPreferences(savedPreferences)
        // Apply cookie preferences
        applyCookiePreferences(savedPreferences)
      } catch (error) {
        console.error("Error parsing cookie preferences:", error)
      }
    }
  }, [])

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // Here you would integrate with your analytics tools
    if (prefs.analytics) {
      // Enable Google Analytics, etc.
      console.log("Analytics cookies enabled")
    }
    if (prefs.marketing) {
      // Enable marketing cookies
      console.log("Marketing cookies enabled")
    }
    if (prefs.functional) {
      // Enable functional cookies
      console.log("Functional cookies enabled")
    }
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("strataidge-cookie-consent", JSON.stringify(allAccepted))
    applyCookiePreferences(allAccepted)
    setShowBanner(false)
  }

  const acceptNecessaryOnly = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    setPreferences(necessaryOnly)
    localStorage.setItem("strataidge-cookie-consent", JSON.stringify(necessaryOnly))
    applyCookiePreferences(necessaryOnly)
    setShowBanner(false)
  }

  const saveCustomPreferences = () => {
    localStorage.setItem("strataidge-cookie-consent", JSON.stringify(preferences))
    applyCookiePreferences(preferences)
    setShowSettings(false)
    setShowBanner(false)
  }

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === "necessary") return // Cannot disable necessary cookies
    setPreferences((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-strataidge-blue-night/95 backdrop-blur-md border-t border-white/10 shadow-2xl"
          >
            <div className="container mx-auto max-w-6xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <Cookie className="h-6 w-6 text-strataidge-turquoise mt-1 flex-shrink-0" />
                  <div className="text-white">
                    <h3 className="font-semibold text-lg mb-2">Respect de votre vie privée</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic et
                      personnaliser le contenu. Vous pouvez accepter tous les cookies ou personnaliser vos préférences.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent focus:outline-none focus:ring-0 flex items-center gap-2"
                  >
                    <Settings className="h-4 w-4" />
                    Personnaliser
                  </Button>
                  <Button
                    onClick={acceptNecessaryOnly}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent focus:outline-none focus:ring-0"
                  >
                    Nécessaires uniquement
                  </Button>
                  <Button
                    onClick={acceptAll}
                    className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-semibold focus:outline-none focus:ring-0"
                  >
                    Accepter tout
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-2xl">
          <div className="relative bg-strataidge-blue-night/90 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
              <DialogHeader className="flex-shrink-0 text-left">
                <DialogTitle className="text-2xl font-bold text-strataidge-turquoise flex items-center gap-3">
                  <Cookie className="h-6 w-6" />
                  Paramètres des cookies
                </DialogTitle>
                <DialogDescription className="text-gray-400 pt-2">
                  Gérez vos préférences de cookies. Vous pouvez modifier ces paramètres à tout moment.
                </DialogDescription>
              </DialogHeader>

              <div className="flex-1 py-6 space-y-6 overflow-y-auto pr-2">
                {/* Necessary Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white">Cookies nécessaires</h4>
                      <p className="text-sm text-gray-400">
                        Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-strataidge-turquoise" />
                      <span className="text-sm text-gray-400">Toujours actif</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 bg-white/5 p-3 rounded-lg">
                    Cookies de session, préférences de langue, sécurité du site
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white">Cookies d'analyse</h4>
                      <p className="text-sm text-gray-400">
                        Ces cookies nous aident à comprendre comment vous utilisez notre site.
                      </p>
                    </div>
                    <button
                      onClick={() => updatePreference("analytics", !preferences.analytics)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-strataidge-turquoise focus:ring-offset-2 focus:ring-offset-strataidge-blue-night ${
                        preferences.analytics ? "bg-strataidge-turquoise" : "bg-gray-600"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.analytics ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 bg-white/5 p-3 rounded-lg">
                    Google Analytics, statistiques de visite, pages populaires
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white">Cookies marketing</h4>
                      <p className="text-sm text-gray-400">
                        Ces cookies sont utilisés pour vous proposer des publicités pertinentes.
                      </p>
                    </div>
                    <button
                      onClick={() => updatePreference("marketing", !preferences.marketing)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-strataidge-turquoise focus:ring-offset-2 focus:ring-offset-strataidge-blue-night ${
                        preferences.marketing ? "bg-strataidge-turquoise" : "bg-gray-600"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.marketing ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 bg-white/5 p-3 rounded-lg">
                    Publicités ciblées, réseaux sociaux, remarketing
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white">Cookies fonctionnels</h4>
                      <p className="text-sm text-gray-400">
                        Ces cookies améliorent les fonctionnalités et la personnalisation du site.
                      </p>
                    </div>
                    <button
                      onClick={() => updatePreference("functional", !preferences.functional)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-strataidge-turquoise focus:ring-offset-2 focus:ring-offset-strataidge-blue-night ${
                        preferences.functional ? "bg-strataidge-turquoise" : "bg-gray-600"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.functional ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 bg-white/5 p-3 rounded-lg">
                    Préférences utilisateur, chat en ligne, widgets sociaux
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <Button
                  onClick={() => setShowSettings(false)}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent focus:outline-none focus:ring-0"
                >
                  Annuler
                </Button>
                <Button
                  onClick={saveCustomPreferences}
                  className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-semibold focus:outline-none focus:ring-0 flex-1"
                >
                  Enregistrer les préférences
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
