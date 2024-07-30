// Importa as funções e hooks necessários do React
import React, { createContext, useContext } from "react";

// Define um tipo TypeScript para as configurações de internacionalização (i18n)
export type I18nType = {
  locale: string;
  t: (key: string) => string;
};

// Cria um contexto para as configurações de i18n, inicializando-o como indefinido
export const I18nContext = createContext<I18nType | undefined>(undefined);

// Define um provedor para o contexto de i18n, que receberá as configurações de i18n e os filhos
export const I18nProvider = ({
  i18n,
  children,
}: {
  i18n: I18nType;
  children: React.ReactNode;
}) => (
  // Define o valor do contexto como as configurações de i18n passadas como prop
  <I18nContext.Provider value={i18n}>{children}</I18nContext.Provider>
);

// Hook personalizado para acessar o contexto de i18n
export const useI18n = () => {
  // Usa o hook useContext para obter o valor atual do contexto de i18n
  const i18n = useContext(I18nContext);
  // Se o valor do contexto for indefinido, lança um erro
  if (i18n === undefined) {
    throw new Error("I18nContext must be used within an I18nProvider");
  }

  return i18n;
};
