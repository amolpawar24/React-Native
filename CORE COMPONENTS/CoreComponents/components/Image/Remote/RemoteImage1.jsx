import React from 'react'
import { Image, View } from 'react-native'

export default function RemoteImage1() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Image source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuiA1ZgP5SuLQwvx8rNaDbQPy8wq_m88hVFDgOGE9yQA&s=10"}} style={{flex: 1, width: "100%", height: "100%"}} />
    </View>
  )
}
