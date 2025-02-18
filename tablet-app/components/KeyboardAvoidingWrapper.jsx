import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";

export default function KeyboardAvoidingWrapper({ children }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
