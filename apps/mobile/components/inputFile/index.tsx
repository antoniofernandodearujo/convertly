import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import { useButtonContext } from "@/hooks/ButtonContenxt";
import CustomProgressBar from "../progressBar";
import { convertFile } from "@/services/convertService";
import ModalComponent from "@/components/modal";
import styles from "./styles";

export default function InputFile() {
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { selectedButtonId } = useButtonContext();

  const getAcceptedFileTypes = () => {
    if (selectedButtonId === 1) return ["application/pdf"];
    if (selectedButtonId === 2)
      return [
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
    return "*/*";
  };

  // Seleção de arquivo
  const handleFile = async () => {
    try {
      const acceptedTypes = getAcceptedFileTypes();
      const type = Array.isArray(acceptedTypes)
        ? acceptedTypes.join(",")
        : acceptedTypes;

      const result = await DocumentPicker.getDocumentAsync({
        type,
        copyToCacheDirectory: true,
        multiple: false,
      });

      if (result.canceled) {
        setError("Seleção de arquivo cancelada.");
        setFileName("");
        setFile(null);
        return;
      }

      if (result.assets.length > 0) {
        const documentAsset = result.assets[0];
        setFileName(documentAsset.name); // Nome real do arquivo
        setFile(documentAsset.uri); // Aqui você obtém o URI do arquivo
      }
      setError(null);
    } catch (e) {
      setError("Erro ao selecionar arquivo.");
      setFileName("");
      setFile(null);
    }
  };

  // Conversão de arquivo
  const handleConversion = async () => {
    if (!selectedButtonId) {
      setError("Por favor, selecione uma opção de conversão!");
      setSuccess(false);
      return;
    }

    if (!fileName || !file) {
      setError("Por favor, selecione um arquivo!");
      setSuccess(false);
      return;
    }

    setError(null);
    setSuccess(true);
    setCompleted(false);

    try {
      const convertedUrl = await convertFile(file, fileName, selectedButtonId); // Passa o URI e o nome do arquivo para a função
      setDownloadUrl(convertedUrl);
      setModalVisible(true);
    } catch (error) {
      console.error("Erro durante a conversão:", error);
      setError((error as Error).message || "Erro durante a conversão.");
    }
  };

  const handleProgressComplete = () => {
    setCompleted(true);
    setSuccess(false);
    setFileName("");
    setFile(null); // Limpar o arquivo selecionado
  };

  return (
    <View>
      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadButton} onPress={handleFile}>
          <MaterialIcons name="file-upload" size={48} color="gray" />
          <Text style={styles.uploadText}>
            {fileName ? fileName : "Clique aqui para selecionar um arquivo"}
          </Text>
        </TouchableOpacity>
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}

      {success && !downloadUrl && (
        <View style={styles.progressContainer}>
          <CustomProgressBar onProgressComplete={handleProgressComplete} />
        </View>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.convertButton}
          onPress={handleConversion}
        >
          <Text style={styles.buttonText}>
            {completed ? "Converter Outro Arquivo" : "Converter"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal que aparece após a conversão */}
      <ModalComponent
        visible={modalVisible}
        downloadUrl={downloadUrl}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}
