"use client";

import React, { useState, useRef } from "react";
import { FiUpload } from "react-icons/fi";
import { useButtonContext } from "@/context/ButtonContenxt";
import ProgressBar from "./Loading";
import { convertFile } from "@/service/convertService";

export default function InputFile() {
  const [fileName, setFileName] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // Para mostrar mensagem de erro
  const [success, setSuccess] = useState<boolean>(false); // Para mostrar a barra de progresso
  const [completed, setCompleted] = useState<boolean>(false); // Para monitorar se o progresso foi concluído
  const { selectedButtonId } = useButtonContext();
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Usado para resetar o input file

  // Definir os tipos de arquivos permitidos com base na opção selecionada
  const getAcceptedFileTypes = () => {
    if (selectedButtonId === 1) {
      return ".pdf"; // PDF para Word, então apenas arquivos PDF são aceitos
    } else if (selectedButtonId === 2) {
      return ".doc,.docx"; // Word para PDF, então apenas arquivos .doc ou .docx são aceitos
    }
    return ""; // Caso nenhuma opção tenha sido selecionada
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const acceptedTypes = getAcceptedFileTypes();

      // Validar o tipo do arquivo com base na opção escolhida
      const validFileType = acceptedTypes
        .split(",")
        .includes(`.${file.name.split(".").pop()?.toLowerCase()}`);

      if (!validFileType) {
        setError("Tipo de arquivo inválido para a opção selecionada.");
        setFileName("");
        return;
      }

      setError(null); // Limpa erro caso o arquivo seja válido
      setFileName(file.name);
    }
  };

  const handleProgressComplete = () => {
    setCompleted(true); // Marca que o progresso foi concluído
    setSuccess(false); // Faz a barra de progresso desaparecer
    setFileName(""); // Limpa o nome do arquivo
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reseta o input file
    }
  };

  const handleConversion = async () => {
    if (!fileName) {
      setError("Por favor, selecione um arquivo!");
      setSuccess(false);
      return;
    }
    setError(null);
    setSuccess(true); // Mostra a barra de progresso
    setCompleted(false); // Reseta o estado de conclusão

    if (!fileInputRef.current?.files?.[0]) {
      setError("Por favor, selecione um arquivo!");
      setSuccess(false);
      return;
    }

    const file = fileInputRef.current.files[0];

    try {
      setError(null);
      setSuccess(true);

      const downloadUrl = await convertFile(file, selectedButtonId); // Usa o serviço
      window.open(downloadUrl); // Abre o arquivo convertido

      setCompleted(true);
    } catch (err) {
      setError("Ocorreu um erro durante a conversão.");
      console.error(err);
    } finally {
      setSuccess(false);
    }
  };

  return (
    <div>
      <div className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="border-dashed border-2 border-gray-400 p-8 text-center rounded-lg hover:border-green-500 transition-all">
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <FiUpload className="text-gray-500 mb-2" size={48} />
            <p className="mb-4 text-gray-500 font-sans">
              {fileName
                ? fileName
                : "Arraste e solte um arquivo aqui ou clique para fazer o upload"}
            </p>
            <input
              id="file-upload"
              type="file"
              accept={getAcceptedFileTypes()} // Aceita tipos de arquivos com base na opção selecionada
              className="hidden" // Mantém o input oculto
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </label>
        </div>
        {error && <p className="text-red-500 mt-2 font-bold">{error}</p>}
      </div>

      {success ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <ProgressBar onProgressComplete={handleProgressComplete} />
        </div>
      ) : (
        <div className="mt-3 mb-4 flex justify-center content-center">
          <button
            onClick={handleConversion}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {completed ? "Converter Outro Arquivo" : "Converter"}
          </button>
        </div>
      )}
    </div>
  );
}
