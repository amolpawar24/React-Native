import { View, Text } from 'react-native';
import styles from './Style';

export default function ExternalStyling() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>External Styling</Text>
    </View>
  );
}

