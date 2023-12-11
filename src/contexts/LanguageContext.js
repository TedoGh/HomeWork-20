import React, { createContext, useContext, useMemo, useState } from "react";

export const languageOptions = {
  ka: "Current language is Georgian",
  en: "Current language is English",
};

const LanguageContext = createContext(null);

const LanguageContextProvider = ({ children }) => {
  const [isLanguage, setIsLanguage] = useState(true);

  const contextValue = useMemo(
    () => ({
      language: isLanguage ? "Georgian" : "English",
      toggleLanguage: () => setIsLanguage((prev) => !prev),
    }),
    [isLanguage]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const contextValue = useContext(LanguageContext);
  if (!contextValue) {
    throw new Error("Your component is not inside LanguageContextProvider");
  }
  return contextValue;
};

export default LanguageContextProvider;
