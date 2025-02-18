import React, { Component } from "react";
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { themeColors, themeStyles } from "../assets/theme";
import NavBar from "../components/NavBar";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createStaticNavigation, useNavigation } from "@react-navigation/native";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

export default function LoginScreen() {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [isPasswordHidden, togglePasswordVisibillity] = React.useState(true);
  const navigation = useNavigation();
  const returnIconNameByVisibillity = () => {
    return isPasswordHidden ? "visibility" : "visibility-off";
  };

  const handleSubmit = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <KeyboardAvoidingWrapper>
      <View style={themeStyles._screenContainer}>
        <NavBar />

        <View style={styles.content}>
          {/* upper text */}
          <View>
            <Text style={[themeStyles.text, styles.responsiveMainText, { fontWeight: "bold" }]}>
              Welcome back
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

          {/* Label & Textbox */}
          <View style={styles.textBoxLabel}>
            <Text
              style={[
                themeStyles.text,
                styles.responsiveSecondaryText,
                { fontWeight: "normal", fontSize: RFPercentage(2) },
              ]}
            >
              Username
            </Text>
            <TextInput
              placeholderTextColor={themeColors.secondaryText}
              style={[themeStyles.textBox, styles.input]}
              onChangeText={onChangeUsername}
              value={username}
              placeholder="Enter your username"
              maxLength={40}
            />
          </View>

          {/* Label & Textbox */}
          <View style={styles.textBoxLabel}>
            <Text
              style={[
                themeStyles.text,
                styles.responsiveSecondaryText,
                { fontWeight: "normal", fontSize: RFPercentage(2) },
              ]}
            >
              Password
            </Text>

            <View style={styles.TextBoxWrapper}>
              <TextInput
                placeholderTextColor={themeColors.secondaryText}
                style={[themeStyles.textBox, styles.input]}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Enter your password"
                secureTextEntry={isPasswordHidden}
                maxLength={40}
              />
              <Pressable
                style={styles.hidePassword}
                onPress={() => togglePasswordVisibillity(!isPasswordHidden)}
              >
                <Icon name={returnIconNameByVisibillity()} size={35} color="white" />
              </Pressable>
            </View>
          </View>

          {/* Error label */}
          <View style={styles.errorLabelBox}>
            <Icon name="error" size={50} color="black" />
            <Text style={styles.errorLabel}>Error: one of the credentials is wrong</Text>
          </View>

          {/* Submit button */}
          <View>
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text
                style={[
                  {
                    fontWeight: "900",
                    fontSize: RFPercentage(1.5),
                  },
                ]}
              >
                Log in
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
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
    // height: RFPercentage(5), // Adjust height
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
