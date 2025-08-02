"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, ArrowRight, X } from "lucide-react"
import { RecruitmentForm } from "./recruitment-form"

interface RecruitmentPopupProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export function RecruitmentPopup({ isOpen, onOpenChange }: RecruitmentPopupProps) {
  const [view, setView] = useState<"details" | "form">("details")

  // Gestion du bouton retour
  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) {
        onOpenChange(false)
      }
    }

    if (isOpen) {
      window.history.pushState({ modal: true }, "")
      window.addEventListener("popstate", handlePopState)
    }

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [isOpen, onOpenChange])

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // Reset view to details when closing the dialog
      setTimeout(() => setView("details"), 300)
    }
    onOpenChange(open)
  }

  const offerings = [
    "Une équipe dynamique et bienveillante",
    "Des missions variées et responsabilisantes",
    "Un accompagnement et des formations continues",
    "Une culture d'entreprise orientée évolution, efficacité et esprit collaboratif",
  ]

  const detailsVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  }

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={() => handleOpenChange(false)} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-sm mx-auto"
        >
          <div className="relative bg-strataidge-blue-night/90 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10 w-full">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />

            {/* Close button */}
            <button
              onClick={() => handleOpenChange(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 transition-colors z-10"
            >
              <X className="h-5 w-5 text-gray-300" />
            </button>

            <div className="relative p-6 flex flex-col max-h-[85vh]">
              <AnimatePresence mode="wait">
                {view === "details" ? (
                  <motion.div
                    key="details"
                    variants={detailsVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex flex-col overflow-hidden"
                  >
                    <div className="flex-shrink-0 text-left mb-4">
                      <h2 className="text-xl font-bold text-strataidge-turquoise">Rejoignez l'équipe Strataidge !</h2>
                    </div>
                    <div className="flex-1 space-y-4 overflow-y-auto text-left">
                      <div className="space-y-3 text-gray-300 text-sm">
                        <p>Chez Strataidge, nous croyons que chaque profil peut apporter une valeur unique.</p>
                        <p>
                          Nous recherchons avant tout des personnes proactives, motivées et curieuses, qu'elles soient
                          expertes confirmées ou débutantes désireuses d'apprendre.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-white mb-3">Ce que nous offrons :</h4>
                        <ul className="space-y-2">
                          {offerings.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-strataidge-turquoise mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 flex-shrink-0">
                      <button
                        onClick={() => setView("form")}
                        className="group relative w-full h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-strataidge-turquoise/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] focus:outline-none focus:ring-0"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <div className="relative flex items-center justify-center h-full px-4">
                          <span className="text-white font-semibold text-base tracking-wide">
                            Postulez dès maintenant
                          </span>
                          <ArrowRight className="ml-2 h-4 w-4 text-strataidge-turquoise transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                        </div>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-strataidge-coral/20 to-strataidge-turquoise/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-y-auto"
                  >
                    <RecruitmentForm onBack={() => setView("details")} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
