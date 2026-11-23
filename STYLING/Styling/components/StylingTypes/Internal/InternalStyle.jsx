import {View, Text, StyleSheet} from "react-native";

export default function InternalStyle() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Internal Styling Using Stylesheet API</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },

    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "blue"
    }
})