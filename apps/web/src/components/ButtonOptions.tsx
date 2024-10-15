"use client";

import { FiFileText, FiFile, FiArrowRight } from "react-icons/fi";
import { useButtonContext } from "@/context/ButtonContenxt";

interface ButtonOptionProps {
  qtdButtonsOptios: number;
  label: string[];
}

export default function ButtonOptions(props: ButtonOptionProps) {
  const { selectedButtonId, setSelectedButtonId } = useButtonContext();

  if (props.qtdButtonsOptios < 1 && props.label.length < 1) {
    throw new Error("Deve haver pelo menos um botão.");
  }

  if (props.qtdButtonsOptios !== props.label.length) {
    throw new Error(
      "A quantidade de botões deve ser igual a quantidade de labels"
    );
  }

  // Gerarando IDs únicos para cada botão
  const ids = Array.from(
    { length: props.qtdButtonsOptios },
    (_, index) => index + 1
  );

  const buttons = props.label.map((label, index) => {
    const isSelected = selectedButtonId === ids[index];

    return (
      <button
        key={ids[index]}
        id={`button-${ids[index]}`}
        className={`flex flex-col items-center justify-center space-y-2 w-36 h-36 ${
          isSelected ? "bg-green-600 opacity-100" : "bg-gray-800 opacity-70"
        } text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300`}
        onClick={() => setSelectedButtonId(ids[index])} // Atualizar o contexto com o ID do botão clicado
      >
        {/* Ícones diferentes para cada opção */}
        {label === "PDF para Word" ? (
          <FiFileText size={30} />
        ) : (
          <FiFile size={30} />
        )}
        <span className="font-semibold text-lg">{label}</span>
        <FiArrowRight size={20} />
      </button>
    );
  });

  return (
    <>
      <div className="justify-start mb-4 ml-4">
        <h1 style={{ fontSize: 20 }} className="font-bold flex justify-center mb-5 content-center">Escolha uma das opções abaixo:</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-4">
        {buttons}
      </div>
    </>
  );
}
