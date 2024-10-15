import axios from "axios";

export const convertFile = async (
  fileUri: string,
  fileName: string,
  selectedButtonId: number
) => {
  const formData = new FormData();

  // Adiciona o arquivo ao FormData usando a uri
  // @ts-expect-error
  formData.append("file", {
    uri: fileUri, // URI do arquivo obtido no Expo DocumentPicker
    type:
      selectedButtonId === 1
        ? "application/pdf"
        : "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    name: fileName, // Nome real do arquivo
  });

  // Adiciona o tipo de conversão ao FormData
  formData.append("conversionType", selectedButtonId.toString());

  console.log("FormData:", formData);

  // Enviar o FormData para a API usando Axios
  const response = await axios.post(
    "https://convert-api-service-production.up.railway.app/api/convert",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data.url;
};
