import { View } from "react-native";

//? It is not recommended to render text without Text Component.
//!  ERROR  Text strings must be rendered within a <Text> component. 

export default function TextErrorDemo(){
    return(
        <>
            <View>
                This Text rendred without Text Component. 
            </View>
        </>
    )
}