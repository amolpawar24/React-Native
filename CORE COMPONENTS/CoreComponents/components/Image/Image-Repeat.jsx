import React from "react";
import { Image, Text } from "react-native";

export default function ImageRepeat() {
    
  return (
    <>
      <Image
        style={{ resizeMode: "repeat", width: 400, height: 400 }}
        source={{
          uri: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
        }}
      />
      <Text>This is Mountain Landscape Image</Text>
    </>
  );
}
