import { Text, View } from "react-native";

export default function InlineStylingExample() {
  return (
    <>
      <View style={{ padding: 20, backgroundColor: "lightyellow" }}>
        <Text style={{ fontSize: 22, color: "red" }}>Inline Styling</Text>
      </View>
    </>
  );
}
