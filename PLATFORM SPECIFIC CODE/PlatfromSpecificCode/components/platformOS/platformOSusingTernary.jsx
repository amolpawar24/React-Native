import React from 'react'
import {View, Text, StyleSheet, Platform} from "react-native"

export default function PlatformOSusingTernary() {
  return (
    <>
        <View style={styles.container}>
            <Text style={styles.text}>
                Plaftform Specific Background
            </Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : Platform.OS === "android" ? "plum" : "red"
    },

    text : {
        fontSize : 24,
        textAlign: "center"
    }
})