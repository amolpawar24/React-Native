
import React from 'react'
import { Alert, Button, View } from 'react-native'

export default function AlertExample() {
  return (
    <>
        <View style={{flex: 1, backgroundColor: "plum", justifyContent: "center", alignItems: "center"}}>
            <Button
                title='Alert1'
                onPress={() => Alert.alert('Invalid Data')}
            />
            <Button
                title='Alert2'
                onPress={() => {Alert.alert("Invalid DOB")}}
            />
            <Button
                title='Alert3'
                onPress={() => {Alert.alert("Invalid Data", "invalid DOB", [
                    {
                        text: "Cancel",
                        onPress: () => {console.log("Cancel Pressed")} 
                    },
                    {
                        text: "OK",
                        onPress: () =>{ console.log("Ok Pressed")}
                    }
                ])}}    
            />
        </View>
    </>
  )
}
