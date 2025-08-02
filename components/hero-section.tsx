"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SparkleAnimation } from "@/components/sparkle-animation"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Marquer que nous sommes côté client
    setIsClient(true)

    // Détecter si on est sur mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (videoRef.current && isClient) {
      videoRef.current.playbackRate = 1.5

      // Précharger et lancer la vidéo sur desktop ET mobile
      videoRef.current.load()
    }
  }, [isMobile, isClient])

  // URLs optimisées pour desktop uniquement
  const videoSources = {
    webm: "https://pub-ead16aaaa6fa455b8f9314d15969a567.r2.dev/5433700_Coll_wavebreak_People_1280x720-_1_-_online-video-cutter.com_.webm",
    mp4: "https://pub-ead16aaaa6fa455b8f9314d15969a567.r2.dev/5433700_Coll_wavebreak_People_1280x720%20(1)%20(online-video-cutter.com).mp4",
  }

  // Déterminer la position de l'objet de manière sûre
  const getObjectPosition = () => {
    if (!isClient) return "center 20%" // Valeur par défaut pour SSR
    return isMobile ? "70% 20%" : "center 20%"
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-strataidge-blue-night">
      {/* Image LCP statique - priorité maximale pour le chargement */}
      <Image
        src="/hero-lcp.webp"
        alt="Équipe Strataidge Fiduciaire & Conseils - Expertise comptable et fiscale"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          objectFit: "cover",
          objectPosition: getObjectPosition(),
        }}
        onLoad={() => {
          // Dès que l'image est chargée, on peut commencer la vidéo sur desktop ET mobile
          if (videoRef.current && isClient) {
            videoRef.current.play().catch(() => {
              // Ignore les erreurs de lecture automatique
            })
          }
        }}
      />

      {/* Vidéo pour desktop ET mobile - chargement immédiat */}
      {isClient && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover z-[1] transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            objectFit: "cover",
            objectPosition: getObjectPosition(),
          }}
          onCanPlay={() => {
            setVideoLoaded(true)
          }}
          onLoadedData={() => {
            setVideoLoaded(true)
          }}
        >
          {/* Sources pour mobile */}
          {isMobile && (
            <>
              <source src="https://pub-ead16aaaa6fa455b8f9314d15969a567.r2.dev/mobile-video.webm" type="video/webm" />
              <source src="https://pub-ead16aaaa6fa455b8f9314d15969a567.r2.dev/mobile-video.mp4" type="video/mp4" />
            </>
          )}
          {/* Sources pour desktop */}
          {!isMobile && (
            <>
              <source src={videoSources.webm} type="video/webm" />
              <source src={videoSources.mp4} type="video/mp4" />
            </>
          )}
          Votre navigateur ne supporte pas la vidéo.
        </video>
      )}

      <SparkleAnimation className="z-[2]" />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-strataidge-blue-night/20 via-strataidge-blue-night/40 to-strataidge-blue-night/90 z-[3]" />

      {/* Contenu principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-[4] relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-8xl"
        >
          L'humain derrière les chiffres.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 md:text-xl"
        >
          {
            "Strataidge Fiduciaire & Conseils : expertise comptable, fiscale et humaine au service d'une réussite sereine."
          }
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex justify-center items-center gap-4"
        >
          <Link href="#about">
            <Button
              size="lg"
              className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold text-base px-8 py-6 rounded-full shadow-lg shadow-strataidge-turquoise/20 hover:shadow-xl hover:shadow-strataidge-turquoise/30 transition-all duration-300"
            >
              Qui sommes-nous ? <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
