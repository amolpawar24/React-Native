
import { View, Text } from "react-native";

import styles from "./Style";

export default function ExternalStyle(){
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>External Styling Example</Text>
        </View>
    )
}