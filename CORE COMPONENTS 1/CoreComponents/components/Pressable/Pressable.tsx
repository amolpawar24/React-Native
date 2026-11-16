import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function PressableExample() {

    const remoteImg = "https://w0.peakpx.com/wallpaper/238/682/HD-wallpaper-fire-nature.jpg"
  return (
    <>
        <View>
            <Pressable
            onPress={() => {console.log("Button Is Pressed");
            }}
        >
            <Image
                style={{height : 820, width : 400}}
                source={{
                    uri : remoteImg
                }}
            />
        </Pressable>
        </View>
    </>
  )
}
