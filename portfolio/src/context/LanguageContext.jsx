import { createContext, useContext, useState } from "react";
import React from 'react'
import { translations } from "../data/translations";

const LanguageContext = createContext()

export default function LanguageProvider({children}) {
    const [language, setLanguage] = useState("en")
    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "es" : "en"))
    }
  return (
    <LanguageContext.Provider value={{language, toggleLanguage, t: translations[language]}}>
        {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(){
    const context = useContext(LanguageContext)
    if(!context){
        throw Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
