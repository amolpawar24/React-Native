import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function DimensionAPIOrientationFix() {
  // State
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
  });

  // Listen for dimension changes
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window }) => {
        setDimensions({ window });
      }
    );

    return () => subscription.remove();
  }, []);

  // Get window dimensions
  const { window } = dimensions;
  const windowWidth = window.width;
  const windowHeight = window.height;

  console.log(windowWidth, windowHeight);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "70%" : "90%",
            height: windowHeight > 790 ? 60 : 300,
          },
        ]}
      >
        <Text
          style={{
            fontSize: windowWidth > 500 ? 50 : 24,
          }}
        >
          Welcome!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});