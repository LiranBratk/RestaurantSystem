import React, { Component } from "react";
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { themeColors, themeStyles } from "../assets/theme";
import NavBar from "../components/NavBar";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function HomeScreen() {
  return (
    <View style={themeStyles._screenContainer}>
      <NavBar />

      <View style={styles.content}>
        {/* upper text */}
        <View>
          <Text style={[themeStyles.text, styles.responsiveMainText, { fontWeight: "bold" }]}>
            YEAHH HOME
          </Text>
          <Text
            style={[
              themeStyles.text,
              styles.responsiveMainText,
              { fontWeight: "300", fontSize: RFPercentage(2.5) },
            ]}
          >
            Log in to your account
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 9.4,
    // justifyContent: "center",
    alignItems: "center",
    gap: "5%",
    paddingTop: "25%",
  },
  responsiveMainText: {
    textAlign: "center",
    fontSize: RFPercentage(3),
  },
  responsiveSecondaryText: {
    textAlign: "center",
    fontSize: RFPercentage(2.5),
  },
  errorLabelBox: {
    // display: "none",
    backgroundColor: "red",
    padding: RFPercentage(1.5),
    flexDirection: "row",
    alignItems: "center",
    gap: RFPercentage(1),
    borderRadius: 5,
  },
  errorLabel: {
    fontSize: RFPercentage(1.5),
    fontWeight: "700",
  },
  textBoxLabel: {
    width: "80%",
    maxWidth: 500,
    alignItems: "flex-start",
    gap: 23,
    // height: RFPercentage(5),
    // flex: 1,
  },
  TextBoxWrapper: {
    width: "100%",
    // flex: 1,
    justifyContent: "center",
    // flexDirection: "row",
  },
  hidePassword: {
    position: "absolute",
    alignSelf: "center",
    right: RFPercentage(1),
    fontWeight: "900",
  },
  input: {
    width: "100%",
    backgroundColor: themeColors.textBox,
    borderRadius: 6,
    display: "flex",
    fontWeight: "bold",
    fontSize: RFPercentage(1.5),
    color: "white",
  },
  button: {
    minWidth: RFPercentage(10),
    height: RFPercentage(5),
    backgroundColor: "#F58026",
    borderRadius: RFPercentage(10),
    alignItems: "center",
    justifyContent: "center",
  },
});
