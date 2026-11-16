import { StyleSheet, View } from "react-native";
import Box from "../Box";

export default function FlexGrow() {
  return (
    <View style={styles.container}>
        <Box style={{backgroundColor: "#4c4cff"}}>Box 1</Box>
        <Box style={{backgroundColor: "#ff2477", flexGrow: 1}}>Box 2</Box>
        <Box style={{backgroundColor: "#f6cd37", flexGrow: 2}}>Box 3</Box>
        <Box style={{backgroundColor: "#098f3a", flexGrow: 3}}>Box 4</Box>
        <Box style={{backgroundColor: "#90526b"}}>Box 5</Box>
        <Box style={{backgroundColor: "#301728"}}>Box 6</Box>
        <Box style={{backgroundColor: "#F2300A"}}>Box 7</Box>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        borderWidth: 5,
        borderBlockColor: "red"
    }
})