"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export function AnimatedTitle({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <h2
      ref={ref}
      className={cn(
        "text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl overflow-hidden py-2",
        className,
      )}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isInView ? 0 : "100%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </h2>
  )
}
