import { StyleSheet, View } from "react-native";
import Box from "../Box";

export default function FlexShrink() {
  return (
    <View style={styles.container}>
        <Box style={{backgroundColor: "#4c4cff", flexShrink: 1}}>Box1 Shrink</Box>
        <Box style={{backgroundColor: "#ff2477", flexShrink: 2}}>Box2 Shrink</Box>
        {/* <Box style={{backgroundColor: "#f6cd37"}}>Box3</Box>
        <Box style={{backgroundColor: "#098f3a"}}>Box4</Box>
        <Box style={{backgroundColor: "#90526b"}}>Box5</Box>
        <Box style={{backgroundColor: "#301728"}}>Box6</Box>
        <Box style={{backgroundColor: "#F2300A"}}>Box7</Box> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        width: 300,
        marginTop: 30,
        borderWidth: 5,
        borderBlockColor: "red"
    }
})