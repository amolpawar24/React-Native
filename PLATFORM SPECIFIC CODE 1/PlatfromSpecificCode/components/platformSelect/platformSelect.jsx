import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

export default function PlatformSelect() {
  return (
    <>
        <View style={styles.container}>
            <Text style={styles.text}>
                Platform Specific Styling
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
        backgroundColor: Platform.select({
            android : "red",
            ios: "orange",
            default: "blue"
        })
    },

    text : {
        fontSize: 24,
        fontWeight : "bold",
        textAlign: "center"
    }
})