"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X, Mail, Lock } from "lucide-react"
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
    }

    if (isMenuOpen || isLoginOpen) {
      window.history.pushState({ modal: true }, "")
      window.addEventListener("popstate", handlePopState)
    }

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [isMenuOpen, isLoginOpen])

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
            <Link href="/" className="flex items-start gap-3">
              <Image src="/logo.png" alt="Strataidge Fiduciaire & Conseils Logo" width={40} height={40} />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg text-white text-left">Strataidge</span>
                <span className="text-[10px] text-strataidge-turquoise font-medium tracking-widest my-[-4px]">
                  FIDUCIAIRE & CONSEILS
                </span>
              </div>
            </Link>
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
                className="text-white hover:bg-white/10 hover:text-white"
              >
                Connexion
              </Button>
              <Button
                asChild
                className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold shadow-lg shadow-strataidge-turquoise/20"
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
            <Link href="/" className="flex items-start gap-3" onClick={() => setIsMenuOpen(false)}>
              <Image src="/logo.png" alt="Strataidge Fiduciaire & Conseils Logo" width={40} height={40} />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg text-white text-left">Strataidge</span>
                <span className="text-[10px] text-strataidge-turquoise font-medium tracking-widest">
                  FIDUCIAIRE & CONSEILS
                </span>
              </div>
            </Link>
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
              className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent py-6 text-base"
            >
              Connexion
            </Button>
            <Button
              asChild
              className="w-full bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold py-6 text-base"
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
                    className="w-full bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold py-3 disabled:opacity-50"
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
    </>
  )
}
