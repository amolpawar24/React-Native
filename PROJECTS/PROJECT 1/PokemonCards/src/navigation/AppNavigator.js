
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../features/Home/HomeScreen';
import Generation1Screen from '../features/Generation1/Generation1Screen';
import PokemonDetailsScreen from '../features/PokemonDetailsScreen/PokemonDetailsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#DC2626',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: '800',
            color: '#111827',
          },
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerBackTitle: 'Back',
          contentStyle: {
            backgroundColor: '#F8FAFC',
          },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Pokémon Cards',
          }}
        />

        <Stack.Screen
          name="Generation1"
          component={Generation1Screen}
          options={{
            title: 'Generation 1',
          }}
        />

        <Stack.Screen
          name="PokemonDetails"
          component={PokemonDetailsScreen}
          options={{
            title: 'Pokémon Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
