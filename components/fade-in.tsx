"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

export const FadeIn = ({
  children,
  className,
  ...rest
}: {
  children: ReactNode
  className?: string
  [key: string]: any
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
