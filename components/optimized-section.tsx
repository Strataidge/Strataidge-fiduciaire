"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface OptimizedSectionProps {
  children: ReactNode
  className?: string
  id?: string
  threshold?: number
  rootMargin?: string
}

export function OptimizedSection({
  children,
  className,
  id,
  threshold = 0.1,
  rootMargin = "50px",
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
        threshold,
        rootMargin,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return (
    <section ref={sectionRef} id={id} className={cn(className)}>
      {isVisible ? children : <div className="min-h-[200px]" />}
    </section>
  )
}
