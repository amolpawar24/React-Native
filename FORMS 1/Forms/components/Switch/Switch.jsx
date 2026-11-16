import React, { useState } from "react";

import {
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

export default function SwitchComponent() {
  // State
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? "#111827" : "#FFFFFF",
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: isDarkMode ? "#FFFFFF" : "#111827",
          },
        ]}
      >
        Dark Mode
      </Text>

      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
      />

      <Text
        style={{
          color: isDarkMode ? "#FFFFFF" : "#111827",
        }}
      >
        {isDarkMode ? "Dark Mode is ON" : "Dark Mode is OFF"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: StatusBar.currentHeight ?? 0,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
});