import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function PlaceholderProp() {

    const [email, setEmail] = useState("")
  
  return (
    <>
        <SafeAreaView style={Styles.container}>
            <View>
                <TextInput style={Styles.input} value={email} onChangeText={setEmail}
                    placeholder='email@example.com'
                />
                <Text style={Styles.text}>Email is: {email}</Text>
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
