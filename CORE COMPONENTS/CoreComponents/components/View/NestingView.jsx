import React from 'react'
import { Text, View } from 'react-native'

export default function NestingView() {
  return (
    <View style={{flex: 1, backgroundColor: "#d7b2b2"}}>
        <View style={{height: 200, width: 200, backgroundColor: "red"}}>
            <Text style={{color: "white", textAlign: "center"}}>View 1</Text>
        </View>
        <View style={{height: 200, width: 200, backgroundColor: "blue"}}>
            <Text style={{color: "white", textAlign: "center"}}>View 2</Text>
        </View>
        <View style={{height: 200, width: 200, backgroundColor: "green"}}>
            <Text style={{color: "white", textAlign: "center"}}>View 3</Text>
        </View>
        <View style={{height: 200, width: 200, backgroundColor: "yellow"}}>
            <Text style={{color: "black", textAlign: "center"}}>View 4</Text>
        </View>
        <View style={{height: 200, width: 200, backgroundColor: "orange"}}>
            <Text style={{color: "black", textAlign: "center"}}>View 5</Text>
        </View>
    </View>
  )
}
