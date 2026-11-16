import { StyleSheet, View } from "react-native";
import Box from "./Box";

export default function FlexContainer() {
  return (
    <View style={styles.container}>
        <Box style={{backgroundColor: "#4c4cff"}}>Box 1</Box>
        <Box style={{backgroundColor: "#ff2477"}}>Box 2</Box>
        <Box style={{backgroundColor: "#f6cd37"}}>Box 3</Box>
        <Box style={{backgroundColor: "#098f3a"}}>Box 4</Box>
        <Box style={{backgroundColor: "#90526b"}}>Box 5</Box>
        <Box style={{backgroundColor: "#301728"}}>Box 6</Box>
        <Box style={{backgroundColor: "#F2300A"}}>Box 7</Box>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        borderWidth: 5,
        borderBlockColor: "red"
    }
})