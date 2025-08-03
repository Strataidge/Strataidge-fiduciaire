"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  quality = 85,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  return (
    <div
      ref={imgRef}
      className={cn(
        "relative overflow-hidden transition-opacity duration-300 w-full aspect-[4/3]",
        !isLoaded && "animate-pulse bg-gray-200",
        className,
      )}
    >
      {isInView && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill={true}
          sizes={sizes}
          quality={quality}
          priority={priority}
          className={cn("transition-opacity duration-300 object-cover", isLoaded ? "opacity-100" : "opacity-0")}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  )
}
