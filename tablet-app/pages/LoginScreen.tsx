import React, { Component } from "react";
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { themeColors, themeStyles } from "../assets/theme";
import NavBar from "../components/NavBar";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function LoginScreen() {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [isPasswordHidden, togglePasswordVisibillity] = React.useState(true);
  const returnIconNameByVisibillity = () => {
    return isPasswordHidden ? "visibility" : "visibility-off";
  };

  return (
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

        {/* Submit button */}
        <View>
          <Pressable style={styles.button} onPress={() => Alert.alert("Simple Button pressed")}>
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
    minWidth: RFPercentage(10), // Ensures a wide button
    height: RFPercentage(5), // Adjust height
    backgroundColor: "#F58026",
    borderRadius: RFPercentage(10), // Makes it fully rounded
    alignItems: "center",
    justifyContent: "center",
  },
});
