
import { Image, View } from 'react-native'

import img from "../../../assets/images/pexels-ankit-rainloure-1425442-35771810.jpg"

export default function RepeatImage() {
  return (
    <View>
        <Image source={img} style={{ resizeMode: "repeat", height: 800, width: 390 }}/>
    </View>
  )
}
