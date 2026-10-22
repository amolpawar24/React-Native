
import { useState } from "react"
import {StatusBar, StyleSheet, Text, TextInput, View} from "react-native"

import { SafeAreaView }  from "react-native-safe-area-context"

export default function TextInputComponent1() {

    const [name, setName] = useState("");

  return (
    <>
        <SafeAreaView style={Styles.container}>
            <View>
                <TextInput style={Styles.input} value={name} onChangeText={setName}/>
                <Text style={Styles.text}>My Name Is: {name}</Text>
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

    },
    text: {
        fontSize: 24,
        padding: 10
    }
})
