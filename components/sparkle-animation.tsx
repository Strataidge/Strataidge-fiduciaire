"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface Sparkle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

export function SparkleAnimation({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Sparkle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      particles.current = [] // Reset particles on resize
    }

    const createParticle = () => {
      const size = Math.random() * 2 + 0.5
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const speedX = Math.random() * 0.5 - 0.25
      const speedY = Math.random() * 0.5 - 0.25
      return {
        x,
        y,
        size,
        speedX,
        speedY,
        opacity: Math.random() * 0.5 + 0.2,
        color: `hsl(170, 100%, ${Math.random() * 20 + 50}%)`, // Variations of turquoise
      }
    }

    const initParticles = () => {
      const numberOfParticles = (canvas.width * canvas.height) / 9000
      for (let i = 0; i < numberOfParticles; i++) {
        particles.current.push(createParticle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((p, index) => {
        p.x += p.speedX
        p.y += p.speedY
        p.opacity -= 0.002

        if (p.opacity <= 0) {
          particles.current.splice(index, 1)
          particles.current.push(createParticle()) // Replace with a new one
        }

        // Wrap particles around the screen
        if (p.x > canvas.width + p.size) p.x = -p.size
        if (p.x < -p.size) p.x = canvas.width + p.size
        if (p.y > canvas.height + p.size) p.y = -p.size
        if (p.y < -p.size) p.y = canvas.height + p.size

        ctx.beginPath()
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size)
        gradient.addColorStop(0, `${p.color.slice(0, -1)}, ${p.opacity})`)
        gradient.addColorStop(1, `${p.color.slice(0, -1)}, 0)`)

        ctx.fillStyle = gradient
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 z-0", className)} />
}
