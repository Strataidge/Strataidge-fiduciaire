"use client"

import { useState, useRef, useCallback, type DragEvent, type ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Paperclip, Upload, X, FileText, ImageIcon, File } from "lucide-react"
import { cn } from "@/lib/utils"

interface FileUploadProps {
  onFileSelect: (file: File | null) => void
  accept?: string
  placeholder?: string
  required?: boolean
  className?: string
}

export function FileUpload({
  onFileSelect,
  accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png",
  placeholder = "Joindre un document",
  required = false,
  className,
}: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = useCallback(
    (file: File | null) => {
      setSelectedFile(file)
      onFileSelect(file)
    },
    [onFileSelect],
  )

  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setIsDragOver(false)

      const files = e.dataTransfer.files
      if (files.length > 0) {
        const file = files[0]
        // Vérifier le type de fichier
        const acceptedTypes = accept.split(",").map((type) => type.trim())
        const fileExtension = "." + file.name.split(".").pop()?.toLowerCase()

        if (acceptedTypes.some((type) => type === fileExtension || file.type.includes(type.replace(".", "")))) {
          handleFileSelect(file)
        } else {
          alert(`Type de fichier non supporté. Formats acceptés: ${accept}`)
        }
      }
    },
    [accept, handleFileSelect],
  )

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files && files.length > 0) {
        handleFileSelect(files[0])
      }
    },
    [handleFileSelect],
  )

  const handleRemoveFile = useCallback(() => {
    handleFileSelect(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }, [handleFileSelect])

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase()
    switch (extension) {
      case "pdf":
        return <FileText className="h-5 w-5 text-red-500" />
      case "doc":
      case "docx":
        return <FileText className="h-5 w-5 text-blue-500" />
      case "jpg":
      case "jpeg":
      case "png":
        return <ImageIcon className="h-5 w-5 text-green-500" />
      default:
        return <File className="h-5 w-5 text-gray-500" />
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className={cn("space-y-2", className)}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleInputChange}
        accept={accept}
        required={required}
        className="hidden"
        name="file"
      />

      {!selectedFile ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all duration-200",
            isDragOver
              ? "border-strataidge-turquoise bg-strataidge-turquoise/10"
              : "border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30",
          )}
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload
            className={cn(
              "h-8 w-8 mx-auto mb-3 transition-colors",
              isDragOver ? "text-strataidge-turquoise" : "text-gray-400",
            )}
          />
          <p
            className={cn(
              "text-sm font-medium mb-1 transition-colors",
              isDragOver ? "text-strataidge-turquoise" : "text-white",
            )}
          >
            {isDragOver ? "Déposez votre fichier ici" : "Glissez-déposez votre fichier"}
          </p>
          <p className="text-xs text-gray-400 mb-3">ou cliquez pour parcourir</p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="border-white/20 text-gray-400 hover:text-white hover:bg-white/10 bg-transparent"
          >
            <Paperclip className="mr-2 h-4 w-4" />
            {placeholder}
          </Button>
          <p className="text-xs text-gray-500 mt-2">Formats acceptés: {accept.replace(/\./g, "").toUpperCase()}</p>
        </div>
      ) : (
        <div className="border border-white/20 rounded-lg p-4 bg-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {getFileIcon(selectedFile.name)}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{selectedFile.name}</p>
                <p className="text-xs text-gray-400">{formatFileSize(selectedFile.size)}</p>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleRemoveFile}
              className="text-gray-400 hover:text-white hover:bg-white/10 p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
