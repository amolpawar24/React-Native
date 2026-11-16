
import React from 'react'
import { StatusBar, View } from 'react-native'

export default function StatusBarExample() {
  return (
    <>
        <View style={{flex: 1, padding: 50, backgroundColor: "plum"}}>
            <StatusBar
                backgroundColor={'green'}
                barStyle="dark-content"
                hidden={false}
            />
        </View>
       
    </>
  )
}
