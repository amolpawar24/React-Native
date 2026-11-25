import { StyleSheet } from "react-native";
import { Text, View } from "react-native";


export function AboutScreen(){

    return(
        <View style={Styles.container}>
            <Text style={Styles.text}>About Screen</Text>
        </View>
    )
}

const Styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    text: {
        fontSize: 24,
        color: "red",
        fontWeight: "bold"
    }
})