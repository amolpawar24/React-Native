import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SafeAreaContext() {
  return (
    <>
        <SafeAreaView style={style.container}>
            <View style={style.box}>
                <Text style={style.text}>
                    Welcome
                </Text>
            </View>
        </SafeAreaView>
    </>
  )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: "plum"
    },

    box : {
        padding: 20
    },

    text : {
        fontSize : 24,
        fontWeight: "bold",
        textAlign: "center"
    }
})