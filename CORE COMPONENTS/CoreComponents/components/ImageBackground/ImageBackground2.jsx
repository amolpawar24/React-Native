import { ImageBackground, Text } from "react-native";

export default function ImageBackground2() {
  return (
    <ImageBackground
      source={{
        uri: "https://w0.peakpx.com/wallpaper/487/513/HD-wallpaper-long-road-blue-sky-car-mountain-mountains-nature-sky.jpg",
      }}
      style={{
        flex: 1,
        width: 400,
        aspectRatio: 1080/1920,
      }}
    >
     
    </ImageBackground>
  );
}