import { useState } from "react";
import { translations } from "../data/translations";
import { LanguageContext } from "./languageContext";

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
