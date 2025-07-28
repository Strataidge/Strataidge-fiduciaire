"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Users } from "lucide-react"

interface RecruitmentBannerProps {
  isVisible: boolean
  onClose: () => void
  onOpenPopup: () => void
}

export function RecruitmentBanner({ isVisible, onClose, onOpenPopup }: RecruitmentBannerProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onClose()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-24 right-4 sm:right-8 z-50"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-strataidge-turquoise rounded-full blur-lg opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-tilt" />
            <motion.div
              layout
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={onOpenPopup}
              className="relative flex items-center justify-center rounded-full bg-strataidge-blue-night/70 backdrop-blur-lg border border-white/10 shadow-xl cursor-pointer hover:bg-strataidge-blue-night/80"
              style={{ padding: "0.625rem" }}
            >
              <motion.div layout="position" className="flex items-center">
                <Users className="h-5 w-5 flex-shrink-0 text-white" />
              </motion.div>

              <AnimatePresence>
                {!isScrolled && (
                  <motion.div
                    initial={{ opacity: 0, width: 0, marginRight: 0 }}
                    animate={{ opacity: 1, width: "auto", marginRight: "2.5rem" }}
                    exit={{ opacity: 0, width: 0, marginRight: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden hidden sm:block"
                  >
                    <span className="pl-2 text-sm font-medium text-white whitespace-nowrap">
                      Rejoignez notre équipe
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {!isScrolled && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={handleCloseClick}
                    aria-label="Fermer la notification de recrutement"
                    className="absolute right-2 p-1 rounded-full hover:bg-white/20 transition-colors z-10 hidden sm:block"
                  >
                    <X className="h-4 w-4 text-gray-300" />
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
