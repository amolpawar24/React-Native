import { StyleSheet, View } from "react-native";
import AbsoluteBox from "./AbsoluteBox";

export default function AbsoluteLayout() {
  return (
    <View style={styles.container}>
        <AbsoluteBox style={{backgroundColor: "#4c4cff"}}>Box 1</AbsoluteBox>
        <AbsoluteBox style={{backgroundColor: "#ff2477", left: 150}}>Box 2</AbsoluteBox>
        <AbsoluteBox style={{backgroundColor: "#f6cd37"}}>Box 3</AbsoluteBox>
        <AbsoluteBox style={{backgroundColor: "#098f3a", top: 150, left: 150}}>Box 4</AbsoluteBox>
        <AbsoluteBox style={{backgroundColor: "#90526b"}}>Box 5</AbsoluteBox>
        <AbsoluteBox style={{backgroundColor: "#301728"}}>Box 6</AbsoluteBox>
        <AbsoluteBox style={{backgroundColor: "#F2300A"}}>Box 7</AbsoluteBox>
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