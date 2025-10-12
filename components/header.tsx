"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X, Mail, Lock, Lightbulb, Zap, Crown, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isLogoStoryOpen, setIsLogoStoryOpen] = useState(false) // Ajouter cette ligne
  const [isLoginSubmitting, setIsLoginSubmitting] = useState(false)
  const [loginError, setLoginError] = useState<string | null>(null)

  const navLinks = [
    { name: "Vision", href: "#about" },
    { name: "Solutions", href: "#services" },
    { name: "Approche", href: "#methodology" },
    { name: "Analyses", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  // Gestion du bouton retour pour le menu mobile
  useEffect(() => {
    const handlePopState = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
      if (isLoginOpen) {
        setIsLoginOpen(false)
      }
      if (isLogoStoryOpen) {
        setIsLogoStoryOpen(false)
      }
    }

    if (isMenuOpen || isLoginOpen || isLogoStoryOpen) {
      window.history.pushState({ modal: true }, "")
      window.addEventListener("popstate", handlePopState)
    }

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [isMenuOpen, isLoginOpen, isLogoStoryOpen])

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoginSubmitting(true)
    setLoginError(null)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // To-Do: Replace with actual login logic
    setLoginError("Email ou mot de passe incorrect.")
    setIsLoginSubmitting(false)
  }

  const menuVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut" },
      display: "block",
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn", delay: 0.5 },
      transitionEnd: {
        display: "none",
      },
    },
  }

  const navContainerVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }

  const navLinkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { y: { stiffness: 1000, velocity: -100 } },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: { y: { stiffness: 1000 } },
    },
  }

  const footerVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.5 },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-strataidge-blue-night/90 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => setIsLogoStoryOpen(true)}
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Découvrir l'histoire de notre logo"
            >
              <Image
                src="/logo-banner.png"
                alt="Strataidge Fiduciaire & Conseils Logo"
                width={280}
                height={50}
                className="h-10 w-auto"
              />
            </button>
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-strataidge-turquoise transition-colors text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                onClick={() => setIsLoginOpen(true)}
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white rounded-full px-6"
              >
                Connexion
              </Button>
              <Button
                asChild
                className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold shadow-lg shadow-strataidge-turquoise/20 rounded-full px-6"
              >
                <Link href="#offers">Offres</Link>
              </Button>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(true)} aria-label="Ouvrir le menu">
                <Menu className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        className="fixed inset-0 bg-strataidge-blue-night z-[100] lg:hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => {
                setIsLogoStoryOpen(true)
                setIsMenuOpen(false)
              }}
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Découvrir l'histoire de notre logo"
            >
              <Image
                src="/logo-banner.png"
                alt="Strataidge Fiduciaire & Conseils Logo"
                width={240}
                height={45}
                className="h-9 w-auto"
              />
            </button>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Fermer le menu">
              <X className="h-7 w-7 text-white" />
            </button>
          </div>

          <motion.nav variants={navContainerVariants} className="flex flex-col items-center justify-center flex-grow">
            <ul className="space-y-6 text-center">
              {navLinks.map((link) => (
                <motion.li key={link.name} variants={navLinkVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-bold text-white hover:text-strataidge-turquoise transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          <motion.div variants={footerVariants} className="py-8 flex flex-col space-y-4">
            <Button
              onClick={() => {
                setIsLoginOpen(true)
                setIsMenuOpen(false)
              }}
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent py-6 text-base rounded-full"
            >
              Connexion
            </Button>
            <Button
              asChild
              className="w-full bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold py-6 text-base rounded-full"
            >
              <Link href="#offers" onClick={() => setIsMenuOpen(false)}>
                Offres
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Login Dialog */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl max-w-md">
          <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8">
              <DialogHeader>
                <DialogTitle className="text-2xl text-strataidge-turquoise text-center">
                  Connexion à votre espace
                </DialogTitle>
                <DialogDescription className="text-gray-400 pt-2 text-center">
                  Accédez à vos tableaux de bord et documents.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleLoginSubmit} className="space-y-4 py-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Votre adresse email"
                    required
                    className="bg-white/5 border-white/10 placeholder:text-gray-400 focus:border-strataidge-turquoise focus:ring-strataidge-turquoise pl-10"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    name="password"
                    type="password"
                    placeholder="Votre mot de passe"
                    required
                    className="bg-white/5 border-white/10 placeholder:text-gray-400 focus:border-strataidge-turquoise focus:ring-strataidge-turquoise pl-10"
                  />
                </div>
                {loginError && <p className="text-sm text-strataidge-coral text-center">{loginError}</p>}
                <DialogFooter className="flex flex-col gap-2 sm:flex-col sm:space-x-0">
                  <Button
                    type="submit"
                    disabled={isLoginSubmitting}
                    className="w-full bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold py-3 disabled:opacity-50 rounded-full"
                  >
                    {isLoginSubmitting ? "Connexion en cours..." : "Se connecter"}
                  </Button>
                  <Button variant="link" className="text-strataidge-turquoise/80 hover:text-strataidge-turquoise">
                    Mot de passe oublié ?
                  </Button>
                </DialogFooter>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Logo Story Dialog */}
      <Dialog open={isLogoStoryOpen} onOpenChange={setIsLogoStoryOpen}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-4xl">
          <div className="relative bg-strataidge-blue-night/90 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
              <DialogHeader className="flex-shrink-0 text-center">
                <div className="inline-flex items-center gap-3 mb-4 justify-center">
                  <Lightbulb className="h-8 w-8 text-strataidge-turquoise" />
                  <span className="font-semibold text-strataidge-turquoise text-lg">Genèse</span>
                </div>
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
                  Savez-vous d'où vient la création de notre logo ?
                </DialogTitle>
                <DialogDescription className="text-gray-400 pt-2">
                  Une histoire fascinante qui révèle toute notre philosophie
                </DialogDescription>
              </DialogHeader>

              <div className="flex-1 py-6 space-y-6 overflow-y-auto pr-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-strataidge-turquoise/20 to-strataidge-coral/20 rounded-2xl blur-xl"></div>
                    <div className="relative bg-white/10 p-6 rounded-2xl border border-white/20">
                      <div className="flex items-center justify-center mb-6">
                        <img
                          src="/logo.png"
                          alt="Logo Strataidge - Inspiré de l'expérience des fentes de Young"
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-white mb-4">L'expérience des fentes de Young</h3>
                        <div className="space-y-3 text-gray-300">
                          <div className="flex items-center gap-3">
                            <Zap className="h-4 w-4 text-strataidge-turquoise flex-shrink-0" />
                            <span className="text-sm">Une lumière passe par deux fentes</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Eye className="h-4 w-4 text-strataidge-turquoise flex-shrink-0" />
                            <span className="text-sm">Observé : des particules ordonnées</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Crown className="h-4 w-4 text-strataidge-turquoise flex-shrink-0" />
                            <span className="text-sm">Non observé : une onde de probabilités infinies</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <h3 className="text-lg font-bold text-white mb-3">Un logo né d'une expérience fondatrice</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Le logo de Strataidge n'est pas qu'un simple signe graphique : il est inspiré d'une des
                        expériences les plus fascinantes de la physique, les fentes de Young. Dans cette expérience, une
                        lumière passe par deux fentes et projette un motif inattendu sur un écran.
                      </p>
                    </div>

                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <h3 className="text-lg font-bold text-white mb-3">
                        Ce que l'on voit… et tout ce que l'on ne voit pas
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Lorsqu'on observe le phénomène, on voit des particules ordonnées ; lorsqu'on ne l'observe pas,
                        c'est une onde de probabilités qui se révèle, beaucoup plus riche et surprenante. Ce que nous
                        percevons dans la vie ou dans notre entreprise n'est souvent qu'une partie de la réalité.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-strataidge-turquoise/10 to-strataidge-coral/10 p-4 rounded-xl border border-strataidge-turquoise/20">
                      <h3 className="text-lg font-bold text-white mb-3">Notre mission</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Le logo de Strataidge symbolise cette dualité : la trajectoire que l'on croit suivre et les
                        opportunités invisibles qui s'offrent à nous si l'on ose élargir notre vision. Nous vous aidons
                        à avancer étape par étape, sans enfermer votre évolution dans une projection figée, mais en
                        révélant toutes les trajectoires possibles vers vos objectifs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-white/5 p-6 rounded-2xl border border-strataidge-turquoise/20">
                    <h3 className="text-xl font-bold text-white mb-4">Avancer sans se figer sur l'objectif apparent</h3>
                    <p className="text-gray-300 italic leading-relaxed">
                      "Chez Strataidge, nous croyons que se focaliser uniquement sur l'objectif observable peut limiter
                      votre potentiel. Comme dans l'expérience de Young, c'est en acceptant l'incertitude et en
                      explorant ce qui n'est pas encore visible que l'on atteint des résultats inespérés."
                    </p>
                  </div>
                </div>
              </div>

              <DialogFooter className="flex-shrink-0 pt-4 border-t border-white/10">
                <Button
                  onClick={() => setIsLogoStoryOpen(false)}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent focus:outline-none focus:ring-0 rounded-full"
                >
                  Fermer
                </Button>
                <Button
                  asChild
                  className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold focus:outline-none focus:ring-0 rounded-full"
                  onClick={() => setIsLogoStoryOpen(false)}
                >
                  <Link href="#services">Découvrir notre approche Multivision</Link>
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
