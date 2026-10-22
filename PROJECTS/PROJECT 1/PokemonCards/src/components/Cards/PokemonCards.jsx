import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {View, Text, StyleSheet, Platform} from "react-native"
export default function PokemonCards() {
  return (
    <>
        <View style={styles.card}>
            <Text>
                Pokemon Cards
            </Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 15,
        borderWidth: 2,
        padding: 15,
        margin: 15,
        ...Platform.select({
            ios: {
                shadowOffeset: {
                    width: 2,
                    height: 2
                },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android: {
                elevation: 5,
            }
        })
    }
})