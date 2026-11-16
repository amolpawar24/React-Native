import React from "react";
import { Text, View } from "react-native";

export default function NestingTextComponent() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={{ padding: 60}}>
        <Text style={{ color: "blue", textAlign: "center"}}>
          Amol
        </Text>
        Pawar
      </Text>
    </View>
  );
}
