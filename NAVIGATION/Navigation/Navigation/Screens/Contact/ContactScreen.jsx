import { StyleSheet } from "react-native";
import { Text, View } from "react-native";


export function ContactScreen() {
    return(
        <>
           <View style={styles.container}>
                <Text style={styles.text}>
                    Contact Page
                </Text>
            </View> 
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        color: "red",
        fontSize: 24,
        fontWeight: "bold"
    }

})