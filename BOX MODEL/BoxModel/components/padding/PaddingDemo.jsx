import { View, Text, StyleSheet } from "react-native";

export default function PaddingDemo() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Box 1</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>Box 2</Text>
            </View>
        </View>
    )
}

const  styles = StyleSheet.create({
   
    container: {},
    box: {},
    text: {}
})