"use client";

import { useState, useEffect } from "react";

export default function ProgressBar({
  onProgressComplete,
}: {
  onProgressComplete: () => void;
}) {
  const [progress, setProgress] = useState(0); // Estado para armazenar o progresso

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval); // Para a animação quando o progresso atinge 100%
          onProgressComplete(); // Chama a função de callback quando atingir 100%
          return 100;
        }
        return prevProgress + 10; // Incrementa o progresso (10% a cada intervalo)
      });
    }, 500); // Intervalo de 500ms para atualizar o progresso

    return () => {
      clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    };
  }, [onProgressComplete]);

  return (
    <div style={{ width: "90%" }} className="bg-gray-300 rounded-full h-3">
      <div
        className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
