import React from 'react'
import { Image, View } from 'react-native'

export default function RemoteImage2() {
    const imageUrl = "https://img.magnific.com/free-photo/winding-trail-through-lush-green-forest_23-2151975543.jpg?semt=ais_hybrid&w=740&q=80"
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Image source={{uri : imageUrl}} style={{flex: 1, width: "100%", height: "100%"}} />
    </View>
  )
}
