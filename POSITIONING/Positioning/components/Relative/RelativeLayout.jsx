import { StyleSheet, View } from "react-native";
import RelativeBox from "./RelativeBox";

export default function RelativeLayout() {
  return (
    <View style={styles.container}>
        <RelativeBox style={{backgroundColor: "#4c4cff"}}>Box 1</RelativeBox>
        <RelativeBox style={{backgroundColor: "#ff2477", left: 150}}>Box 2</RelativeBox>
        <RelativeBox style={{backgroundColor: "#f6cd37"}}>Box 3</RelativeBox>
        <RelativeBox style={{backgroundColor: "#098f3a", top: 150, left: 150}}>Box 4</RelativeBox>
        <RelativeBox style={{backgroundColor: "#90526b"}}>Box 5</RelativeBox>
        <RelativeBox style={{backgroundColor: "#301728"}}>Box 6</RelativeBox>
        <RelativeBox style={{backgroundColor: "#F2300A"}}>Box 7</RelativeBox>
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