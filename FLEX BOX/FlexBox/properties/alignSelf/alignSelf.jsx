import { StyleSheet, View } from "react-native";
import Box from "../Box";

export default function AlignSelf() {
  return (
    <View style={styles.container}>
        <Box style={{backgroundColor: "#4c4cff", alignSelf: "flex-start"}}>Box1</Box>
        <Box style={{backgroundColor: "#ff2477", alignSelf: "flex-end"}}>Box2</Box>
        <Box style={{backgroundColor: "#f6cd37", alignSelf: "center"}}>Box3</Box>
        <Box style={{backgroundColor: "#098f3a", alignSelf: "auto"}}>Box4</Box>
        <Box style={{backgroundColor: "#90526b", alignSelf: "baseline"}}>Box5</Box>
        <Box style={{backgroundColor: "#301728"}}>Box6</Box>
        <Box style={{backgroundColor: "#F2300A"}}>Box7</Box>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        borderWidth: 5,
        alignItems: "stretch",
        borderBlockColor: "red"
    }
})