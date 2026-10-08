import React from 'react'
import { Image, Pressable } from 'react-native'

export default function PressableExample() {
  return (
    <>
        <Pressable
            onPress={() => {console.log("Button Is Pressed");
            }}
        >
            <Image
                source={{
                    uri : "https://w0.peakpx.com/wallpaper/456/27/HD-wallpaper-nature-nature.jpg"
                }}
            />
        </Pressable>
    </>
  )
}
