import React from 'react'
import { Image, View } from 'react-native'

export default function ImageExample2() {
  return (
    <>
        <View>
            <Image source={require('../../assets/icon.png')} style={{width: 100, height: 100}}/>
        </View>

    </>
  )
}
