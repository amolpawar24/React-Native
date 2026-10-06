import React from 'react'
import { ImageBackground, Text } from 'react-native'

export default function ImageBackground1() {
  return (
    <>
        <ImageBackground
            source={require('../../assets/splash-icon.png')}
            style={{width: 400, height: 700}}
        />
        <Text>
            This is Forground Text which is displayed on the background image.
        </Text>
    </>
  )
}
