import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { themeStyles } from "../assets/theme";
import Icon from "react-native-vector-icons/MaterialIcons";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function NavBar() {
  return (
    <View style={styles.navbar}>
      <Text>
        <Icon name="storefront" size={50} color="white" />
      </Text>
      <Text style={[themeStyles.text, { fontSize: 28 }, styles.navbarText]}>
        Restaurant Management System
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flex: 0.6,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    flexDirection: "row", // Aligns items in a row
    alignItems: "center", // Centers items vertically
    paddingLeft: "5%",
    columnGap: "1.5%",
    minHeight: RFPercentage(2),
  },
  navbarText: {
    fontWeight: "bold",
  },
});
