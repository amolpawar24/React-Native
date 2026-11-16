
import React, { useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
} from 'react-native';

export default function ScrollToTop() {

  const scrollViewRef = useRef(null);

  const handleScrollToTop = () => {
    scrollViewRef.current.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>

      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 15 }}>
        Scroll To Top Example
      </Text>

      <Button
        title="Scroll To Top"
        onPress={handleScrollToTop}
      />

      <ScrollView
        ref={scrollViewRef}
        style={{ marginTop: 15 }}
      >

        <Text style={{ fontSize: 20, padding: 15 }}>Item 1</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 2</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 3</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 4</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 5</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 6</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 7</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 8</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 9</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 10</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 11</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 12</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 13</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 14</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 15</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 16</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 17</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 18</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 19</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 20</Text>

      </ScrollView>

    </View>
  );
}
