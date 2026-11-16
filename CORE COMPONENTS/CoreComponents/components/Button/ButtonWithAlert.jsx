import React from 'react'
import { Alert, Button, View } from 'react-native'

export default function ButtonWithAlert() {

    //  handle button click event
    const handleAlert = () => {
        Alert.alert("Button Clicked", "You have clicked the button!", [
            { text: "OK" }
        ])
    }
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Button
            title='Press Me'
            onPress={handleAlert}
        />
    </View>
  )
}
