import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, Linking } from "react-native";
import styles from "./styles";

interface ModalComponentProps {
  visible: boolean;
  downloadUrl: string | null;
  onClose: () => void;
}

export default function ModalComponent(props: ModalComponentProps) {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            🎉 Arquivo convertido com sucesso! 🎉
          </Text>
          {props.downloadUrl && (
            <TouchableOpacity
              onPress={() =>
                props.downloadUrl && Linking.openURL(props.downloadUrl)
              }
            >
              <Text style={styles.downloadLink}>
                📥 Clique aqui para baixar o arquivo 📥
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.closeButton} onPress={props.onClose}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
