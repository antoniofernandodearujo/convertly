"use client";

import { createContext, ReactNode, useContext, useState } from "react";

// Define a interface do contexto
interface ButtonContextProps {
  selectedButtonId: number | null;
  setSelectedButtonId: (id: number) => void;
}

// Cria o contexto com valor inicial
const ButtonContext = createContext<ButtonContextProps | undefined>(undefined);

// Componente provider do contexto
export const ButtonProvider = ({ children }: { children: ReactNode }) => {
  const [selectedButtonId, setSelectedButtonId] = useState<number | null>(null);

  return (
    <ButtonContext.Provider value={{ selectedButtonId, setSelectedButtonId }}>
      {children}
    </ButtonContext.Provider>
  );
};

// Hook para acessar o contexto
export const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("useButtonContext must be used within a ButtonProvider");
  }
  return context;
};
