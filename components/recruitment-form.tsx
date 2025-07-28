"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { User, Mail, MessageSquare, Loader, CheckCircle, ArrowLeft, Send } from "lucide-react"
import { FileUpload } from "@/components/file-upload"

interface RecruitmentFormProps {
  onBack: () => void
}

export function RecruitmentForm({ onBack }: RecruitmentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formMessage, setFormMessage] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormMessage(null)

    const formData = new FormData(event.currentTarget)

    // Ajouter le fichier sélectionné au FormData
    if (selectedFile) {
      formData.set("file", selectedFile)
    }

    const webhookUrl = "https://buck-able-curiously.ngrok-free.app/webhook/formulaire-recrutement"

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        body: formData,
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
          className="mt-6 border-white/20 text-white hover:bg-white/10 bg-transparent focus:outline-none focus:ring-0"
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
          <button
            onClick={onBack}
            className="p-1 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-0"
          >
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

        <FileUpload
          onFileSelect={setSelectedFile}
          accept=".pdf,.doc,.docx"
          placeholder="Joindre votre CV ou lettre de motivation"
          required={true}
        />

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-strataidge-turquoise/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative flex items-center justify-center h-full px-6">
              {isSubmitting ? (
                <>
                  <Loader className="h-5 w-5 animate-spin text-strataidge-turquoise mr-3" />
                  <span className="text-white font-semibold text-lg tracking-wide">Envoi en cours...</span>
                </>
              ) : (
                <>
                  <span className="text-white font-semibold text-lg tracking-wide">Envoyer ma candidature</span>
                  <Send className="ml-3 h-5 w-5 text-strataidge-turquoise transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </>
              )}
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-strataidge-coral/20 to-strataidge-turquoise/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </form>
    </div>
  )
}
