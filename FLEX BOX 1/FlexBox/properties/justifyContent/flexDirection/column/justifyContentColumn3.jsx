import { StyleSheet, View } from "react-native";
import Box from "../../../Box";

export default function JustifyContentColumn3() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#4c4cff"}}>Box1</Box>
      <Box style={{ backgroundColor: "#ff2477"}}>Box2</Box>
      <Box style={{ backgroundColor: "#f6cd37"}}>Box3</Box>
      <Box style={{ backgroundColor: "#098f3a" }}>Box4</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: 30,
    backgroundColor: "black",
    borderWidth: 5,
    borderBlockColor: "red",
  },
});
