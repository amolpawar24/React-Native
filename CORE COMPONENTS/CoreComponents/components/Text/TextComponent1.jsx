import React from 'react'
import { Text } from 'react-native'

//? It is recommended to render Text with Text Component and not Without View Component.
//? Always use View Component to render Text Component. 
//  ERROR  [ReferenceError: Property 'View' doesn't exist]
export default function TextComponent1() {
  return (
    <Text style={{ color: "red", textAlign: "center", padding: 60 }}>This is Text Component Example 2</Text>
  )
}
