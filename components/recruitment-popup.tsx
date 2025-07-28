"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"
import { RecruitmentForm } from "./recruitment-form"

interface RecruitmentPopupProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export function RecruitmentPopup({ isOpen, onOpenChange }: RecruitmentPopupProps) {
  const [view, setView] = useState<"details" | "form">("details")

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
    "Une culture d’entreprise orientée évolution, efficacité et esprit collaboratif",
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

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-2xl">
        <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
          <div className="relative p-4 sm:p-8 flex flex-col max-h-[90vh]">
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
                  <DialogHeader className="flex-shrink-0 text-left">
                    <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
                      Rejoignez l'équipe Strataidge !
                    </DialogTitle>
                  </DialogHeader>
                  <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-2 sm:pr-4 text-left">
                    <div className="space-y-4 text-gray-300">
                      <p>Chez Strataidge, nous croyons que chaque profil peut apporter une valeur unique.</p>
                      <p>
                        Nous recherchons avant tout des personnes proactives, motivées et curieuses, qu’elles soient
                        expertes confirmées ou débutantes désireuses d’apprendre.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-white mb-4">Ce que nous offrons :</h4>
                      <ul className="space-y-3">
                        {offerings.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-strataidge-turquoise mr-3 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 flex-shrink-0">
                    <button
                      onClick={() => setView("form")}
                      className="w-full text-center px-4 py-3 rounded-lg font-bold bg-strataidge-coral/90 hover:bg-strataidge-coral text-white transition-all duration-300 shadow-lg shadow-strataidge-coral/25 hover:shadow-xl hover:shadow-strataidge-coral/40"
                    >
                      Postulez dès maintenant
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
                  className="overflow-y-auto pr-2"
                >
                  <RecruitmentForm onBack={() => setView("details")} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
