import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Biblioteca de ícones do Expo
import { useButtonContext } from '@/hooks/ButtonContenxt';
import styles from './styles';

interface ButtonOptionProps {
  qtdButtonsOptions: number;
  label: string[];
}

export default function ButtonOptions(props: ButtonOptionProps) {
  const { selectedButtonId, setSelectedButtonId } = useButtonContext();

  if (props.qtdButtonsOptions < 1 || props.label.length < 1) {
    throw new Error("Deve haver pelo menos um botão.");
  }

  if (props.qtdButtonsOptions !== props.label.length) {
    throw new Error("A quantidade de botões deve ser igual à quantidade de labels");
  }

  const ids = Array.from(
    { length: props.qtdButtonsOptions },
    (_, index) => index + 1
  );

  const buttons = props.label.map((label, index) => {
    const isSelected = selectedButtonId === ids[index];

    return (
      <TouchableOpacity
        key={ids[index]}
        style={[
          styles.button,
          isSelected ? styles.buttonSelected : styles.buttonDefault,
        ]}
        onPress={() => setSelectedButtonId(ids[index])}
      >
        {label === "PDF para Word" ? (
          <MaterialIcons name="picture-as-pdf" size={30} color="white" />
        ) : (
          <MaterialIcons name="insert-drive-file" size={30} color="white" />
        )}
        <Text style={styles.label}>{label}</Text>
        <MaterialIcons name="arrow-forward" size={20} color="white" />
      </TouchableOpacity>
    );
  });

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Escolha uma das opções abaixo:</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons}
      </View>
    </>
  );
};

