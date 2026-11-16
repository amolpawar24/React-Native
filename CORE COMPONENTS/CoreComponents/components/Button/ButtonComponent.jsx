import React from 'react'
import { Button, View } from 'react-native'

export default function ButtonComponent() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Button
            title='Press Me'
            onPress={() =>{ console.log("Button Clicked");
            }}
        />
    </View>
  )
}
