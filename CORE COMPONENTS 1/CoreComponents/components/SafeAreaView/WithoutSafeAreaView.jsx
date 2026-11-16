import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function WithoutSafeAreaView() {
  return (
    <>
        <View style={styles.container}>
            <Text style={styles.text}>
                Welcome
            </Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: "plum"
    },

    text : {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    }
})


