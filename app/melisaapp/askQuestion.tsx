import React from "react";
import { View, Text } from "react-native";
import BackButton from "./BackButton";

export default function AskQuestion() {
  return (
    <View style={{ padding: 20 }}>
      <BackButton />

      <Text style={{ fontSize: 22, marginTop: 20 }}>❓ Ask a Question</Text>
    </View>
  );
}
