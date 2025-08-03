"use client"

import { type ReactNode, useState, useRef, useEffect } from "react"

interface OptimizedSectionProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
}

export function OptimizedSection({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "100px",
}: OptimizedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <div ref={sectionRef} className={className} style={{ contentVisibility: "auto" }}>
      {isVisible ? children : <div className="min-h-[200px]" />}
    </div>
  )
}
