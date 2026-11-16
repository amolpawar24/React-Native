
import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import pokemonList from "../../data/PokemonList.json";

export default function SectionListComponent() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <SectionList
        sections={pokemonList}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeaderText}>
            {section.type}
          </Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
        stickySectionHeadersEnabled={true}
        ItemSeparatorComponent={() => <View style={{height: 10}}/>}
        SectionSeparatorComponent={() => <View style={{height: 10}}/>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  list: {
    padding: 15,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 18,
    textAlign: "center",
  },
  sectionHeaderText: {
    backgroundColor: "#e2e8f0",
    fontSize: 24,
    fontWeight: "bold",
    padding: 12,
    marginBottom: 8,
  },
});
