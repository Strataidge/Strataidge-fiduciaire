"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Clock, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ConstructionBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenShown, setHasBeenShown] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Vérifier si la bannière a déjà été affichée dans cette session
    const bannerShown = sessionStorage.getItem("construction-banner-shown")

    if (!bannerShown) {
      // Afficher la bannière après un court délai
      const timer = setTimeout(() => {
        setIsVisible(true)
        setHasBeenShown(true)
        sessionStorage.setItem("construction-banner-shown", "true")
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  // Calculer le temps restant jusqu'au 1er septembre 2025
  useEffect(() => {
    const targetDate = new Date("2025-09-01T00:00:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!hasBeenShown) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-3 sm:p-4"
          >
            <div className="relative w-full max-w-sm sm:max-w-lg mx-auto max-h-[95vh] overflow-y-auto">
              <div className="relative bg-strataidge-blue-night/95 backdrop-blur-2xl text-white rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/10 overflow-hidden">
                {/* Gradient background */}
                <div className="absolute -inset-px rounded-2xl sm:rounded-3xl bg-gradient-to-b from-strataidge-turquoise/40 to-strataidge-coral/40 opacity-60 blur-xl -z-10" />

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                  aria-label="Fermer"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300" />
                </button>

                <div className="relative p-4 sm:p-8 pt-8 sm:pt-12">
                  {/* Icon */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-strataidge-turquoise/20 rounded-full flex items-center justify-center">
                        <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-strataidge-turquoise" />
                      </div>
                      <div className="absolute -inset-2 bg-strataidge-turquoise/30 rounded-full blur-lg opacity-50" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3 sm:space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-strataidge-turquoise leading-tight">
                      L'humain derrière les chiffres… bientôt en ligne.
                    </h2>

                    <div className="space-y-2 sm:space-y-3 text-gray-300">
                      <p className="text-sm sm:text-base leading-relaxed">
                        Nous travaillons à façonner une expérience fiduciaire digitale et humaine qui transformera votre
                        approche de la comptabilité et du conseil fiscal.
                      </p>

                      <p className="text-xs sm:text-sm text-strataidge-turquoise/80 bg-white/5 rounded-lg p-2 sm:p-3">
                        Cette version est une prévisualisation : la plateforme complète et tous nos services seront
                        opérationnels dès le <strong className="text-strataidge-turquoise">1er septembre 2025</strong>.
                      </p>

                      <p className="text-xs sm:text-sm text-gray-400 italic">
                        Revenez nous voir et entrez dans un univers où clarté et stratégie deviennent vos meilleurs
                        alliés.
                      </p>
                    </div>

                    {/* Chronomètre */}
                    <div className="flex items-center justify-center gap-1 sm:gap-2 mt-4 sm:mt-6 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-strataidge-turquoise" />
                      <div className="flex items-center gap-2 sm:gap-4 text-center">
                        <div className="flex flex-col">
                          <span className="text-lg sm:text-2xl font-bold text-white">{timeLeft.days}</span>
                          <span className="text-xs text-gray-400">jours</span>
                        </div>
                        <span className="text-white text-sm sm:text-base">:</span>
                        <div className="flex flex-col">
                          <span className="text-lg sm:text-2xl font-bold text-white">
                            {timeLeft.hours.toString().padStart(2, "0")}
                          </span>
                          <span className="text-xs text-gray-400">heures</span>
                        </div>
                        <span className="text-white text-sm sm:text-base">:</span>
                        <div className="flex flex-col">
                          <span className="text-lg sm:text-2xl font-bold text-white">
                            {timeLeft.minutes.toString().padStart(2, "0")}
                          </span>
                          <span className="text-xs text-gray-400">min</span>
                        </div>
                        <span className="text-white text-sm sm:text-base">:</span>
                        <div className="flex flex-col">
                          <span className="text-lg sm:text-2xl font-bold text-white">
                            {timeLeft.seconds.toString().padStart(2, "0")}
                          </span>
                          <span className="text-xs text-gray-400">sec</span>
                        </div>
                      </div>
                    </div>

                    {/* Action button */}
                    <div className="mt-6 sm:mt-8">
                      <Button
                        onClick={handleClose}
                        className="w-full bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold py-2.5 sm:py-3 text-sm sm:text-base rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Explorer la prévisualisation
                      </Button>
                    </div>

                    {/* Partner section */}
                    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                      <p className="text-xs sm:text-sm text-gray-400 mb-2">Site construit par notre partenaire :</p>
                      <div className="flex items-center justify-center">
                        <a
                          href="https://www.strataidge-communication.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative flex items-center gap-2 hover:opacity-80 transition-all duration-300 cursor-pointer group"
                          aria-label="Visiter le site de Strataidge Communication"
                        >
                          {/* Halo bleu autour du logo */}
                          <div className="relative">
                            <div className="absolute -inset-2 bg-blue-500/30 rounded-full blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                            <Image
                              src="/strataidge-communication-logo.png"
                              alt="Strataidge Communication Logo"
                              width={32}
                              height={32}
                              className="relative object-contain sm:w-10 sm:h-10 z-10"
                            />
                          </div>

                          {/* Texte avec halo bleu */}
                          <div className="relative text-left">
                            {/* Halo bleu autour du texte */}
                            <div className="absolute -inset-2 bg-blue-500/30 rounded-lg blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                            <div className="relative z-10">
                              <span className="text-white font-bold text-sm sm:text-base block">Strataidge</span>
                              <span
                                className="text-[#ff0066] text-xs font-medium block my-[-1px] sm:my-[-2px]"
                                style={{ letterSpacing: "0.1em" }}
                              >
                                COMMUNICATION
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
