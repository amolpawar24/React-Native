import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

export default function PlatformOSIfElse() {
    let PlatformName = ""

    if (Platform.OS === "android") {
        PlatformName = "This App is running on Android"
    }
    else if (Platform.OS === "ios") {
        PlatformName = " This App is running on Android"
    }
    else if (Platform.OS === "web") {
        Platform = "Running On The Web"
    }
    else if (Platform.OS === "windows") {
        PlatformName = "Running on the Windows"
    }
    else if (Platform.OS === "macos") {
        PlatformName = "Running on the MacOs"
    }
    else{
        PlatformName = "Running on the Other devices"
    }


  return (
    <>
        <View style={styles.container}>
            <Text style={styles.text}>
                {PlatformName}
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
        fontSize: 24,
        fontWeight: "bold"
    }
})