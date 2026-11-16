
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
} from 'react-native';

export default function ActivityIndicatorAnimating() {
  const [loading, setLoading] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator animating={loading} />

      <Text style={{ fontSize: 18, marginVertical: 15 }}>
        {loading ? 'Loading...' : 'Loading Stopped'}
      </Text>

      <Button
        title={loading ? 'Stop Loading' : 'Start Loading'}
        onPress={() => setLoading(!loading)}
      />
    </View>
  );
}
