import React from 'react'
import {View, Text, Platform, StyleSheet} from 'react-native'
export default function PlatformOSCheck() {
  return (
    <>
        <View style={styles.container}>
          <Text style={styles.text}>
            Current Platform : {Platform.OS}
          </Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent: "center",
    alignItems: "center"
  },

  text : {
    fontSize: 24,
    fontWeight: "bold"
  }
})