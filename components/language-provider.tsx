"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { getContent } from "@/lib/content"

type Language = "en" | "tl"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  content: any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [content, setContent] = useState(getContent("en"))

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "tl")) {
      setLanguage(savedLanguage)
      setContent(getContent(savedLanguage))
    }
  }, [])

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    setContent(getContent(newLanguage))
    localStorage.setItem("language", newLanguage)
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleLanguageChange,
        content,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
