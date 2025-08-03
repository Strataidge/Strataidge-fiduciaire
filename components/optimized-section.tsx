"use client"

import { type ReactNode, useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface OptimizedSectionProps {
  children: ReactNode
  className?: string
  id?: string
  threshold?: number
  rootMargin?: string
  minHeight?: string
}

export function OptimizedSection({
  children,
  className,
  id,
  threshold = 0.1,
  rootMargin = "100px",
  minHeight = "200px",
}: OptimizedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin,
        threshold,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn("section-optimized", className)}
      style={{ contentVisibility: "auto" }}
    >
      {isVisible ? (
        children
      ) : (
        <div className="flex items-center justify-center" style={{ minHeight }}>
          <div className="animate-pulse bg-gray-200 rounded-lg w-full h-32" />
        </div>
      )}
    </section>
  )
}
