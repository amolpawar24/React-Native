import React from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function PressableWithImage() {
  const remoteImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCXS3GloAtphVwqlpIQpRbe5vzMbFlmBh6eibNQUy_Xg&s=10";
    
  return (
    <>
      <View>
        <Pressable
          onPress={() => {
            console.log("Button Is Pressed");
          }}
        >
          <Image
            style={{ height: 820, width: 400 }}
            source={{
              uri: remoteImg,
            }}
          />
        </Pressable>
      </View>
    </>
  );
}
