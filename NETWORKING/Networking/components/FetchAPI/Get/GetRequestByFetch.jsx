
import React, { useEffect, useState } from "react";

import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function GetRequestDemo() {
  // States
  const [postLists, setPostLists] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data when the screen loads
  useEffect(() => {
    fetchData();
  }, []);

  // GET request
  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();
      setPostLists(data);
    } catch (error) {
      console.log("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Header component
  const ListHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Posts List</Text>
        <Text style={styles.subHeader}>
          Here are the latest 10 posts
        </Text>
      </View>
    );
  };

  // Footer component
  const ListFooter = () => {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          You have reached the end of the list!
        </Text>
      </View>
    );
  };

  // Separator component
  const ItemSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#f5f5f5"
        barStyle="dark-content"
      />

      {loading ? (
        <ActivityIndicator
          size="large"
          color="blue"
          style={styles.loader}
        />
      ) : (
        <FlatList
          data={postLists}
          keyExtractor={(item) => item.id.toString()}

          // Header
          ListHeaderComponent={ListHeader}

          // Footer
          ListFooterComponent={ListFooter}

          // Separator between items
          ItemSeparatorComponent={ItemSeparator}

          // Render each post
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.titleText}>
                {item.id}. {item.title}
              </Text>

              <Text style={styles.titleBody}>
                {item.body}
              </Text>
            </View>
          )}
          contentContainerStyle={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  loader: {
    flex: 1,
  },

  header: {
    backgroundColor: "#1565c0",
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 15,
  },

  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },

  subHeader: {
    fontSize: 14,
    color: "#e3f2fd",
    marginTop: 5,
  },

  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
    textTransform: "capitalize",
  },

  titleBody: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
  },

  separator: {
    height: 12,
  },

  footer: {
    backgroundColor: "#e8f5e9",
    padding: 16,
    borderRadius: 8,
    marginTop: 15,
    alignItems: "center",
  },

  footerText: {
    fontSize: 15,
    color: "#2e7d32",
    fontWeight: "bold",
  },
});
