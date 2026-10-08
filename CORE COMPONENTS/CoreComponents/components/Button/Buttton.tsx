
import React from 'react'
import { Button, View } from 'react-native'

export default function ButttonExample() {
  return (
    <>
        <View style={{flex : 1,position : "relative", top : "50%"}}>
            <Button
                title='Press'
                onPress={()=>{console.log("Button is Pressed")}}
                color={"red"}
            />
        </View>
    </>
  )
}
