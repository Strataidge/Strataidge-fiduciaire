"use client"

import { useState, useRef, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { User, Mail, MessageSquare, Paperclip, Loader, CheckCircle, ArrowLeft } from "lucide-react"

interface RecruitmentFormProps {
  onBack: () => void
}

export function RecruitmentForm({ onBack }: RecruitmentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formMessage, setFormMessage] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormMessage(null)

    const formData = new FormData(event.currentTarget)
    const webhookUrl = "https://buck-able-curiously.ngrok-free.app/webhook/formulaire-recrutement"

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        body: formData,
        // Headers are not needed; the browser sets the correct multipart/form-data header with boundary
      })

      if (response.ok) {
        setFormMessage("Votre candidature a été envoyée avec succès.")
      } else {
        const errorData = await response.text()
        console.error("Submission failed:", errorData)
        setFormMessage("Une erreur est survenue. Veuillez réessayer.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setFormMessage("Une erreur de réseau est survenue. Veuillez vérifier votre connexion et réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (formMessage) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-16 w-16 mx-auto text-strataidge-turquoise mb-4" />
        <h3 className="text-xl font-bold text-white">Candidature envoyée !</h3>
        <p className="text-gray-300 mt-2">{formMessage}</p>
        <Button
          onClick={onBack}
          variant="outline"
          className="mt-6 border-white/20 text-white hover:bg-white/10 bg-transparent"
        >
          Retour
        </Button>
      </div>
    )
  }

  return (
    <div>
      <DialogHeader className="text-left mb-4">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-1 rounded-full hover:bg-white/10 transition-colors">
            <ArrowLeft className="h-5 w-5 text-gray-300" />
          </button>
          <DialogTitle className="text-2xl font-bold text-strataidge-turquoise">Votre candidature</DialogTitle>
        </div>
        <DialogDescription className="text-gray-400 pt-2 pl-9">
          Remplissez les champs ci-dessous pour nous rejoindre.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            name="nom"
            type="text"
            placeholder="Votre nom complet"
            required
            className="bg-white/5 border-white/10 placeholder:text-gray-400 focus:border-strataidge-turquoise focus:ring-strataidge-turquoise pl-10"
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            name="email"
            type="email"
            placeholder="Votre adresse email"
            required
            className="bg-white/5 border-white/10 placeholder:text-gray-400 focus:border-strataidge-turquoise focus:ring-strataidge-turquoise pl-10"
          />
        </div>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Textarea
            name="message"
            placeholder="Votre message / motivation (facultatif)"
            rows={4}
            className="bg-white/5 border-white/10 placeholder:text-gray-400 focus:border-strataidge-turquoise focus:ring-strataidge-turquoise pl-10 pt-2"
          />
        </div>
        <div>
          <input
            type="file"
            name="file"
            ref={fileInputRef}
            required
            onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
            className="hidden"
            accept=".pdf,.doc,.docx"
          />
          <Button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            variant="outline"
            className="w-full justify-start text-left font-normal border-white/10 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
          >
            <Paperclip className="mr-2 h-5 w-5" />
            {fileName || "Joindre votre CV ou lettre de motivation"}
          </Button>
        </div>
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-strataidge-coral hover:bg-strataidge-coral/90 text-white font-bold py-3 disabled:opacity-50 flex items-center gap-2"
          >
            {isSubmitting && <Loader className="h-4 w-4 animate-spin" />}
            {isSubmitting ? "Envoi en cours..." : "Envoyer ma candidature"}
          </Button>
        </div>
      </form>
    </div>
  )
}
