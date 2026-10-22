
import {StatusBar, StyleSheet, TextInput, View} from "react-native"

import { SafeAreaView }  from "react-native-safe-area-context"

export default function TextInputComponent() {
  return (
    <>
        <SafeAreaView style={Styles.container}>
            <View>

                <TextInput style={Styles.input}></TextInput>
            </View>
        </SafeAreaView>
    </>
  )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "fff",
        paddingTop: StatusBar.currentHeight
    },

    input: {
        borderWidth: 1,
        height: 40,
        padding: 10,
        margin: 10

    }
})
