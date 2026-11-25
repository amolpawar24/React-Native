import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/Home/HomeScreem";
import { AboutScreen } from "./Screens/About/AboutScreen";

// Creating the Native Stack Navigator

const Stack = createNativeStackNavigator();

export function PassingTheDataBetweenScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="About">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} initialParams={{DefVal : "DefaultValue"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
