import { useState, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";

interface CustomProgressBarProps {
  onProgressComplete: () => void;
}

export default function CustomProgressBar(props: CustomProgressBarProps) {
  const [progress] = useState(new Animated.Value(0)); // Inicialize o valor da animação

  useEffect(() => {
    // Animação da barra de progresso de 0% a 100%
    Animated.timing(progress, {
      toValue: 100, // Valor final para a largura total (100%)
      duration: 2000, // Duração da animação em milissegundos
      useNativeDriver: false, // Desativado para animar o layout
    }).start(({ finished }) => {
      if (finished) {
        props.onProgressComplete(); // Chamada de retorno quando a animação é concluída
      }
    });
  }, [props.onProgressComplete]);

  // A largura da barra é interpolada para ir de 0% a 100%
  const widthInterpolated = progress.interpolate({
    inputRange: [0, 100], // Intervalo de entrada da animação
    outputRange: ["0%", "100%"], // Intervalo de saída (de 0% a 100%)
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, { width: widthInterpolated }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: "#303030",
    borderRadius: 10,
    margin: 10,
    width: "85%", // Largura total do contêiner
  },
  bar: {
    height: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
