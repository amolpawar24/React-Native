import { Button, StyleSheet } from "react-native";
import { Text, View } from "react-native";


export default function HomeScreen({ navigation, route }){
    console.log("🚀 ~ HomeScreen ~ route:", route)

    const {result} = route?.params;



    return(
        <View style={Styles.container}>
            <Text style={Styles.text}>Home Screen</Text>
            <Text>{result}</Text>
            <Button title="Go to the About" onPress={() =>{ navigation.navigate("About", {
                name: "Amol Pawar"
            })}}/>
        </View>
    )
}

const Styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontSize: 24,
        color: "red",
        fontWeight: "bold",
        marginBottom: 16
    }

})