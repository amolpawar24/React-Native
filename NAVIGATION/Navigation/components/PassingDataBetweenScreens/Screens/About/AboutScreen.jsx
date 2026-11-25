import { Button, StyleSheet } from "react-native";
import { Text, View } from "react-native";


export function AboutScreen({route, navigation}){

    // Destrcturing the props
    const { name, DefVal } = route.params

    return(
        <View style={Styles.container}>
            <Text style={Styles.text}>About Screen</Text>
            <Text>{name}</Text>
            <Text>{DefVal}</Text>
            {/* To update the Home Data */}
            <Button title="Update the Name" onPress={() => {navigation.setParams({name : "Ganesh Gidde"})}}/>
            {/* < update send the Data in the Home */}
            <Button title="Go to the Home Screen" onPress={() => {navigation.navigate("Home", {
                result : "Data From the About"
            })}}/>
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