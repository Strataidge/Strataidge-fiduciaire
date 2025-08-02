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
    setIsClient(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (videoRef.current && isClient) {
      const video = videoRef.current

      // Précharger immédiatement la vidéo
      video.preload = "auto"
      video.playbackRate = 1.5

      // Commencer le chargement immédiatement
      video.load()

      // Essayer de jouer dès que possible
      const playVideo = () => {
        video.play().catch(() => {
          // Ignore les erreurs de lecture automatique
        })
      }

      // Jouer dès que les métadonnées sont chargées
      video.addEventListener("loadedmetadata", playVideo)
      video.addEventListener("canplay", playVideo)

      return () => {
        video.removeEventListener("loadedmetadata", playVideo)
        video.removeEventListener("canplay", playVideo)
      }
    }
  }, [isClient, isMobile])

  // URLs optimisées pour desktop et mobile
  const videoSources = {
    desktop: {
      mp4: "https://pub-ead16aaaa6fa455b8f9314d15969a567.r2.dev/5433700_Coll_wavebreak_People_1280x720%20(1)%20(online-video-cutter.com).mp4",
      webm: "https://pub-ead16aaaa6fa455b8f9314d15969a567.r2.dev/5433700_Coll_wavebreak_People_1280x720-_1_-_online-video-cutter.com_.webm",
    },
    mobile: {
      mp4: "https://pub-ead16aaaa6fa455b8f9314d15969a567.r2.dev/5433700_Coll_wavebreak_People_1280x720%20(1)%20(online-video-cutter.com)%20(2).mp4",
      webm: "https://pub-ead16aaaa6fa455b8f9314d15969a567.r2.dev/5433700_Coll_wavebreak_People_1280x720-_1_-_online-video-cutter.com_-_2_.webm",
    },
  }

  const getObjectPosition = () => {
    if (!isClient) return "center 20%"
    return isMobile ? "60% 20%" : "center 20%"
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-strataidge-blue-night">
      {/* Fond de couleur uniforme */}
      <div className="absolute inset-0 bg-strataidge-blue-night z-0" />

      {/* Image LCP statique */}
      <Image
        src="/hero-lcp.webp"
        alt="Équipe Strataidge Fiduciaire & Conseils - Expertise comptable et fiscale"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover z-[1]"
        style={{
          objectFit: "cover",
          objectPosition: getObjectPosition(),
          backgroundColor: "#0A192F",
        }}
        onError={() => {
          console.log("Erreur de chargement de l'image hero-lcp.webp")
        }}
      />

      {/* Vidéo avec préchargement optimisé */}
      {isClient && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-lcp.webp"
          className={`absolute inset-0 w-full h-full object-cover z-[2] transition-opacity duration-500 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            objectFit: "cover",
            objectPosition: getObjectPosition(),
            backgroundColor: "#0A192F",
          }}
          onLoadedData={() => {
            setVideoLoaded(true)
          }}
          onCanPlay={() => {
            setVideoLoaded(true)
          }}
        >
          {/* MP4 en premier pour une meilleure compatibilité */}
          <source src={isMobile ? videoSources.mobile.mp4 : videoSources.desktop.mp4} type="video/mp4" />
          <source src={isMobile ? videoSources.mobile.webm : videoSources.desktop.webm} type="video/webm" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      )}

      <SparkleAnimation className="z-[3]" />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-strataidge-blue-night/20 via-strataidge-blue-night/40 to-strataidge-blue-night/90 z-[4]" />

      {/* Contenu principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-[5] relative">
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
