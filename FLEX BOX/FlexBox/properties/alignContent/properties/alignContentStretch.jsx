import { StyleSheet, View } from "react-native";
import ContentBox from "../ContentBox";

export default function AlignContentStretch() {
  return (
    <View style={styles.container}>
        <ContentBox style={{backgroundColor: "#4c4cff"}}>Box1</ContentBox>
        <ContentBox style={{backgroundColor: "#ff2477"}}>Box2</ContentBox>
        <ContentBox style={{backgroundColor: "#f6cd37"}}>Box3</ContentBox>
        <ContentBox style={{backgroundColor: "#098f3a"}}>Box4</ContentBox>
        <ContentBox style={{backgroundColor: "#90526b"}}>Box5</ContentBox>
        <ContentBox style={{backgroundColor: "#301728"}}>Box6</ContentBox>
        <ContentBox style={{backgroundColor: "#F2300A"}}>Box7</ContentBox>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        flexWrap: "wrap",
        alignContent: "stretch",
        marginTop: 30,
        borderWidth: 5,
        borderBlockColor: "red"
    }
})