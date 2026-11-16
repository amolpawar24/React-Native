import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomComponent from './components/CustomComponent';

export default function App() {
  return (
    <>
      <CustomComponent name="Amol Pawar"/>
      <CustomComponent name="Ganesh Gidde"/>
    </>
  );
}
