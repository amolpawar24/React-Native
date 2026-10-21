
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import playersList from "../../data/PlayerData.json";

export default function PlayersList() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={playersList}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
            return <View style={styles?.card}>
            <Text style={styles.cardText}>{item.name}</Text>
            <Text style={styles.cardText}>{item.role}</Text>
          </View>;
        }}
        ItemSeparatorComponent={<View style={{height: 16}}/>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  list: {
    padding: 16,
  },

  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 16,
  },

  cardText: {
    fontSize: 15,
    color: "#222",
  },
});
