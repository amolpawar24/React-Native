import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../../Screens/Home/HomeScreen";
import HomeScreenUsingUseNavigateHook from "../../../Screens/Home/HomeScreenUsingUseNavigateHook";
import { AboutScreen } from "../../../Screens/About/AboutScreen";
import { ContactScreen } from "../../../Screens/Contact/ContactScreen";


    // Creating the  Native Stack Navigator
    const Stack = createNativeStackNavigator();

export default function NativeStackNavigator() {
  return (

    // 1.import the NavigationContainer from the react-navigation
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}/>
          {/* <Stack.Screen name="Home" component={HomeScreenUsingUseNavigateHook}/> */}
          <Stack.Screen name="About" component={AboutScreen}/>
          <Stack.Screen name="Contact" component={ContactScreen}/>
        </Stack.Navigator>
    </NavigationContainer>

  )
}
