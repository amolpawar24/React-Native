import React from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";
import playerList from "../../data/PlayerData.json";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Scrollview() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {playerList.map((player) => {
            return (
              <>
                <View key={player?.id} style={styles.card}>
                  <Text style={styles.cardText}>Name:- {player.name}</Text>
                  <Text style={styles.cardText}>Role:- {player.role}</Text>
                </View>
              </>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight
  },

  scrollView: {
    paddingHorizontal: 16
  },

  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16
  },
  cardText: {
    fontSize: 15
  }
});
