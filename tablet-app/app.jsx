import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { themeColors } from "./assets/theme.jsx";
import { StatusBar } from "expo-status-bar";
import RootStack from "./navigators/RootStack";
import KeyboardAvoidingWrapper from "./components/KeyboardAvoidingWrapper";

function Header() {
  const insets = useSafeAreaInsets();

  return <View style={[{ paddingTop: insets.top }]} />;
}

export default function AppScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>
        {/* <Header /> */}
        <StatusBar />
        <RootStack />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: themeColors.background,
  },
});
