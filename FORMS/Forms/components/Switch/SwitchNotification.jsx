import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function SwitchNotification() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Enable Notifications
      </Text>

      <Switch
        value={isEnabled}
        onValueChange={setIsEnabled}
      />

      <Text>
        {isEnabled ? "Notifications ON" : "Notifications OFF"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
  },
});