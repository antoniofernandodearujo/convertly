import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
// components
import Header from "@/components/header";
import Content from "@/components/content";
import { ButtonProvider } from "@/hooks/ButtonContenxt";

export default function Home() {
  return (
    <React.Fragment>
      <ButtonProvider>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <Header />
          <Content />
        </View>
      </ButtonProvider>
    </React.Fragment>
  );
}
