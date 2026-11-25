import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "react-native";


export default function HomeScreenUsingUseNavigateHook(){


    // hooks
    const navigation = useNavigation();

    return(
        <View style={Styles.container}>
            <Text style={Styles.text}>Home Screen Using Use Navigate Hook</Text>
            <Button title="Go to the About" onPress={() =>{ navigation.navigate("About")}}/>
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