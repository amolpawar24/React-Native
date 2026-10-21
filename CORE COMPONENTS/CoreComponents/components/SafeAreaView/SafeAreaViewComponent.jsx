import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

export default function SafeAreaViewComponent() {
  return (
    <>
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>
                    Welcome
                </Text>
            </View>
        </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: "plum"
    },

    box : {
        padding: 20
    },

    text : {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    }
})


//! The SafeAreaView is now deprecated 