import { ImageBackground, Text } from "react-native";

export default function ImageBackground1() {
  return (
    <>
      <ImageBackground
        source={require("../../assets/splash-icon.png")}
        style={{ flex: 1}}
      >
        <Text style={{position: "absolute", top: "50%", left: 0, right: 0, bottom: 0}}>
          This is Forground Text which is displayed on the background image.
        </Text>
      </ImageBackground>
    </>
  );
}
