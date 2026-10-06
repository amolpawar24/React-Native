import React from 'react'
import { Image, View } from 'react-native'

export default function ImageExample1() {
  return (
    <>
        <Image source={require('../../assets/splash-icon.png')} style={{width: 100, height: 100}}/>
    </>
  )
}
