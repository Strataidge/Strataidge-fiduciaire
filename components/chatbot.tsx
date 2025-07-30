"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [dragStartPosition, setDragStartPosition] = useState({ x: 0, y: 0 })
  const [userInteracted, setUserInteracted] = useState(false)
  const [showWelcomeBubble, setShowWelcomeBubble] = useState(false)
  const [isRetracted, setIsRetracted] = useState(false) // Nouveau state pour la rétraction
  const [isMobile, setIsMobile] = useState(false)

  const chatbotRef = useRef<HTMLDivElement>(null)
  const inactivityTimerRef = useRef<NodeJS.Timeout>()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Show welcome bubble after 5 seconds
  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      if (!isRetracted) {
        // Ne pas montrer la bulle si rétracté
        setShowWelcomeBubble(true)
        setTimeout(() => {
          setShowWelcomeBubble(false)
        }, 5000)
      }
    }, 5000)

    return () => clearTimeout(welcomeTimer)
  }, [isRetracted])

  // Fonction pour vérifier si le chatbot doit être rétracté
  const checkRetraction = (newPosition: { x: number; y: number }) => {
    if (!isMobile) return false

    const threshold = 50 // Distance du bord pour déclencher la rétraction
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    return (
      newPosition.x < threshold || // Bord gauche
      newPosition.x > windowWidth - threshold - 80 || // Bord droit
      newPosition.y < threshold || // Bord haut
      newPosition.y > windowHeight - threshold - 80 // Bord bas
    )
  }

  // Position rétractée (sous le logo dans la bannière)
  const getRetractedPosition = () => {
    // Position du logo dans le header : flex items-center gap-3, le logo fait 40px
    // Le header fait 80px de haut (h-20), le logo est centré
    // Position approximative : 4px (padding) + 40px (logo) + 3*4px (gap) = ~56px du bord gauche
    return {
      x: 56, // Position horizontale sous le logo
      y: 100, // Juste sous la bannière (header de 80px + marge)
    }
  }

  // Auto-minimize after 5 seconds of inactivity
  const resetInactivityTimer = () => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current)
    }
    if (isOpen && !isMinimized && !userInteracted) {
      inactivityTimerRef.current = setTimeout(() => {
        setIsMinimized(true)
      }, 5000)
    }
  }

  const clearInactivityTimer = () => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current)
    }
  }

  useEffect(() => {
    if (isOpen && !isMinimized) {
      resetInactivityTimer()
    }
    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current)
      }
    }
  }, [isOpen, isMinimized, messages, userInteracted])

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPosition({
        x: window.innerWidth - 100,
        y: window.innerHeight - 100,
      })
    }
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setDragStartPosition({ x: e.clientX, y: e.clientY })
    const rect = e.currentTarget.getBoundingClientRect()
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = Math.max(0, Math.min(window.innerWidth - 80, e.clientX - dragOffset.x))
      const newY = Math.max(0, Math.min(window.innerHeight - 80, e.clientY - dragOffset.y))
      const newPosition = { x: newX, y: newY }

      setPosition(newPosition)

      // Vérifier si on doit rétracter sur mobile
      if (isMobile) {
        const shouldRetract = checkRetraction(newPosition)
        setIsRetracted(shouldRetract)
      }
    }
  }

  const handleMouseUp = (e: MouseEvent) => {
    if (isDragging) {
      const dragDistance = Math.sqrt(
        Math.pow(e.clientX - dragStartPosition.x, 2) + Math.pow(e.clientY - dragStartPosition.y, 2),
      )

      // Si rétracté sur mobile, aller à la position fixe sous le logo
      if (isMobile && isRetracted) {
        const retractedPos = getRetractedPosition()
        setPosition(retractedPos)
        // S'assurer que l'état rétracté reste actif
        setTimeout(() => setIsRetracted(true), 100)
      }

      // Si la distance de déplacement est très petite, considérer comme un clic
      if (dragDistance < 5) {
        if (!isOpen) {
          openChat()
        } else if (isMinimized) {
          setIsMinimized(false)
          setUserInteracted(true)
          clearInactivityTimer()
        } else {
          closeChat()
        }
      }
    }
    setIsDragging(false)
  }

  // Ajouter les gestionnaires tactiles après les gestionnaires de souris existants

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault()
    const touch = e.touches[0]
    setIsDragging(true)
    setDragStartPosition({ x: touch.clientX, y: touch.clientY })
    const rect = e.currentTarget.getBoundingClientRect()
    setDragOffset({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    })
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches.length > 0) {
      e.preventDefault()
      const touch = e.touches[0]
      const newX = Math.max(0, Math.min(window.innerWidth - 80, touch.clientX - dragOffset.x))
      const newY = Math.max(0, Math.min(window.innerHeight - 80, touch.clientY - dragOffset.y))
      const newPosition = { x: newX, y: newY }

      setPosition(newPosition)

      // Vérifier si on doit rétracter sur mobile
      if (isMobile) {
        const shouldRetract = checkRetraction(newPosition)
        setIsRetracted(shouldRetract)
      }
    }
  }

  const handleTouchEnd = (e: TouchEvent) => {
    if (isDragging) {
      const touch = e.changedTouches[0]
      const dragDistance = Math.sqrt(
        Math.pow(touch.clientX - dragStartPosition.x, 2) + Math.pow(touch.clientY - dragStartPosition.y, 2),
      )

      // Si rétracté sur mobile, aller à la position fixe sous le logo
      if (isMobile && isRetracted) {
        const retractedPos = getRetractedPosition()
        setPosition(retractedPos)
        // S'assurer que l'état rétracté reste actif
        setTimeout(() => setIsRetracted(true), 100)
      }

      // Si la distance de déplacement est très petite, considérer comme un tap
      if (dragDistance < 5) {
        if (!isOpen) {
          openChat()
        } else if (isMinimized) {
          setIsMinimized(false)
          setUserInteracted(true)
          clearInactivityTimer()
        } else {
          closeChat()
        }
      }
    }
    setIsDragging(false)
  }

  // Modifier le useEffect existant pour inclure les événements tactiles
  useEffect(() => {
    if (isDragging) {
      // Événements souris
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)

      // Événements tactiles
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", handleTouchEnd)

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
        document.removeEventListener("touchmove", handleTouchMove)
        document.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [isDragging, dragOffset, dragStartPosition, isOpen, isMinimized, isMobile, isRetracted])

  const sendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      const formData = new FormData()
      formData.append("message", text.trim())
      formData.append("timestamp", new Date().toISOString())

      const response = await fetch(
        "https://buck-able-curiously.ngrok-free.app/webhook/61aeaee3-dc42-4652-8612-cb6cc32bb757",
        {
          method: "POST",
          body: formData,
        },
      )

      if (response.ok) {
        const responseText = await response.text()
        let botResponse = "Merci pour votre message ! Notre équipe vous répondra bientôt."

        try {
          const jsonResponse = JSON.parse(responseText)
          if (jsonResponse.output) {
            botResponse = jsonResponse.output
          }
        } catch (parseError) {
          botResponse = responseText
            .replace(/^\[|\]$/g, "")
            .replace(/^"output":\s*"/i, "")
            .replace(/"$/, "")
            .replace(/\\"/g, '"')
            .trim()
        }

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          isUser: false,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botMessage])
      } else {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "Désolé, je n'ai pas pu traiter votre demande. Veuillez réessayer.",
          isUser: false,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, errorMessage])
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Une erreur est survenue. Veuillez réessayer plus tard.",
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputValue)
  }

  const openChat = () => {
    setIsOpen(true)
    setIsMinimized(false)
    setUserInteracted(true)
    clearInactivityTimer()
    setShowWelcomeBubble(false)
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        text: "Bonjour ! Je suis Charlie, votre assistant virtuel Strataidge. Comment puis-je vous aider aujourd'hui ?",
        isUser: false,
        timestamp: new Date(),
      }
      setMessages([welcomeMessage])
    }
  }

  const minimizeChat = () => {
    setIsMinimized(true)
    setUserInteracted(false)
  }

  const closeChat = () => {
    setIsOpen(false)
    setIsMinimized(false)
    setUserInteracted(false)
    clearInactivityTimer()
  }

  const handleChatFrameClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setUserInteracted(true)
    clearInactivityTimer()
  }

  // Calculer la position du chat
  const getChatPosition = () => {
    if (typeof window === "undefined") return { x: 0, y: 0 }

    const chatWidth = isMobile ? Math.min(350, window.innerWidth - 20) : 400
    const chatHeight = isMobile ? Math.min(450, window.innerHeight - 100) : 500

    let chatX = position.x - (chatWidth - 80) / 2
    let chatY = position.y - chatHeight - 10

    // Ajustements pour mobile
    if (isMobile) {
      chatX = Math.max(10, Math.min(window.innerWidth - chatWidth - 10, chatX))
      chatY = Math.max(10, chatY)

      // Si pas assez de place au-dessus, mettre en dessous
      if (chatY < 10) {
        chatY = position.y + 90
      }
    } else {
      chatX = Math.max(10, Math.min(window.innerWidth - chatWidth - 10, chatX))
      chatY = Math.max(10, chatY)
    }

    return { x: chatX, y: chatY, width: chatWidth, height: chatHeight }
  }

  // Calculer la position de la bulle
  const getBubblePosition = () => {
    if (typeof window === "undefined") return { x: 0, y: 0 }

    const bubbleWidth = 200
    const bubbleHeight = 50

    let bubbleX = position.x + 32 - bubbleWidth / 2
    let bubbleY = position.y - bubbleHeight - 40

    bubbleX = Math.max(10, Math.min(window.innerWidth - bubbleWidth - 10, bubbleX))
    bubbleY = Math.max(10, bubbleY)

    if (position.y < bubbleHeight + 50) {
      bubbleY = position.y + 80
    }

    return { x: bubbleX, y: bubbleY }
  }

  const chatPosition = getChatPosition()
  const bubblePosition = getBubblePosition()

  // Taille du chatbot selon l'état
  const chatbotSize = isRetracted && isMobile ? 40 : 64

  return (
    <>
      {/* Welcome Bubble */}
      <AnimatePresence>
        {showWelcomeBubble && !isOpen && !isRetracted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="fixed z-60 select-none"
            style={{
              left: bubblePosition.x,
              top: bubblePosition.y,
            }}
          >
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md text-strataidge-turquoise px-4 py-3 rounded-2xl shadow-2xl border border-strataidge-turquoise/50 text-sm max-w-[200px]">
                <p className="leading-relaxed font-medium">Bonjour, je suis Charlie ton assistant IA !</p>
              </div>

              <div
                className="absolute w-0 h-0 border-l-4 border-r-4 border-transparent"
                style={{
                  left: "50%",
                  transform: "translateX(-50%)",
                  ...(position.y < 100
                    ? {
                        top: "-8px",
                        borderBottomWidth: "8px",
                        borderBottomColor: "#00C9A7",
                      }
                    : {
                        bottom: "-8px",
                        borderTopWidth: "8px",
                        borderTopColor: "#00C9A7",
                      }),
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          width: chatbotSize,
          height: chatbotSize,
        }}
        transition={{ duration: 0.3 }}
        className="fixed z-50 select-none"
        style={{
          left: position.x,
          top: position.y,
          bottom: "auto",
          right: "auto",
        }}
      >
        <div className="relative group">
          {/* Halo effect - plus petit si rétracté */}
          {(!isOpen || isMinimized) && (
            <div
              className={`absolute bg-strataidge-turquoise rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
              style={{
                inset: isRetracted && isMobile ? "-4px" : "-8px",
              }}
            />
          )}

          <div
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className="relative bg-transparent hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-move"
            style={{
              width: chatbotSize,
              height: chatbotSize,
              touchAction: "none", // Empêche le scroll pendant le drag
            }}
            aria-label="Ouvrir le chat avec Charlie"
          >
            <Image
              src={showWelcomeBubble || (isOpen && !isMinimized) ? "/charlie-open.png" : "/charlie-closed.png"}
              alt="Charlie - Assistant virtuel"
              width={chatbotSize}
              height={chatbotSize}
              className="group-hover:scale-110 transition-transform duration-300 pointer-events-none"
            />
          </div>
        </div>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            ref={chatbotRef}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed z-40 select-none"
            style={{
              left: chatPosition.x,
              top: chatPosition.y,
              width: chatPosition.width,
              height: chatPosition.height,
            }}
            onClick={handleChatFrameClick}
          >
            <div className="w-full h-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 flex flex-col overflow-hidden">
              {/* Header */}
              <div className="bg-strataidge-blue-night/90 backdrop-blur-md text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image src="/charlie-open.png" alt="Charlie" width={32} height={32} />
                  <div>
                    <h3 className="font-bold text-sm">Charlie</h3>
                    <p className="text-xs text-gray-300">Assistant IA Strataidge</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={minimizeChat}
                    className="p-1 hover:bg-white/10 rounded transition-colors"
                    aria-label="Minimiser"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={closeChat}
                    className="p-1 hover:bg-white/10 rounded transition-colors"
                    aria-label="Fermer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/80 backdrop-blur-sm flex flex-col-reverse">
                <div ref={messagesEndRef} />
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm border border-white/20 p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          />
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">Charlie écrit...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex flex-col-reverse space-y-reverse space-y-4">
                  {messages
                    .slice()
                    .reverse()
                    .map((message) => (
                      <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.isUser
                              ? "bg-strataidge-turquoise text-white"
                              : "bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm border border-white/20"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p className={`text-xs mt-1 ${message.isUser ? "text-white/70" : "text-gray-500"}`}>
                            {message.timestamp.toLocaleTimeString("fr-FR", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 bg-white/90 backdrop-blur-md border-t border-white/20">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Tapez votre message..."
                    className="flex-1 text-sm bg-white/80 backdrop-blur-sm border-white/30"
                    disabled={isLoading}
                    onFocus={() => {
                      setUserInteracted(true)
                      clearInactivityTimer()
                    }}
                    onKeyPress={() => {
                      setUserInteracted(true)
                      clearInactivityTimer()
                    }}
                  />
                  <Button
                    type="submit"
                    size="sm"
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-white"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
