import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Title: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Bem-vindo ao Convertly!</Text>
      <Text style={styles.description}>
        O <Text style={styles.bold}>Convertly</Text> é a sua solução rápida e eficiente para conversões de arquivos.
        Transforme seus PDFs em documentos do Word e vice-versa com facilidade.
      </Text>
    </View>
  );
};

export default Title;
