import { View, Text } from "react-native";

export default function ViewComponent() {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <View style={{height: 200, width: 200, backgroundColor: "blue"}}>
        <Text style={{ color: "white", textAlign: "center" }}>View1</Text>
      </View>
      <View style={{height: 200, width: 200, backgroundColor: "green"}}>
        <Text style={{ color: "white", textAlign: "center" }}>View2</Text>
      </View>
    </View>
  );
}