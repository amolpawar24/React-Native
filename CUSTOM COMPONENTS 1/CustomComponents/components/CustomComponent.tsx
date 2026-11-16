import React from 'react'
import { Text, View } from 'react-native'

type CustomComponentProps = {
  name: string
}

export default function CustomComponent({ name }: CustomComponentProps) {
  return (
    <>
      <View>

        <Text>
          My Name is {name}
        </Text>

      </View>
    </>
  )
}
