import { StyleSheet } from "react-native";
// import {
//   useFonts,
//   Roboto_400Regular,
//   Roboto_700Bold,
// } from "@expo-google-fonts/roboto";

const themeColors = {
  background: "#171412",
  primaryText: "#FFFFFF",
  secondaryText: "#BAA89C",
  textBox: "#382E29",
};

const themeStyles = StyleSheet.create({
  //   entireApp: {
  //     fontFamily: "Roboto_400Regular",
  //   },
  _screenContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: themeColors.background,
  },
  text: {
    color: themeColors.primaryText,
    fontSize: 16,
  },
  labelText: {
    color: themeColors.secondaryText,
    fontSize: 16,
  },
  textBox: {
    backgroundColor: themeColors.textBox,
    padding: "3%",
  },
});

export { themeColors, themeStyles };
