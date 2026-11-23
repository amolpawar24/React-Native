import { View, Text} from 'react-native'

export default function InlineStyle() {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: "lightyellow" }}>
      <Text style={{ fontSize: 20, color: "blue", textAlign: 'center', marginTop: 20 }}>
        Inline Styling Example
      </Text>
    </View>
  )
}
