
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GetAndPostByFetch() {
  // States
  const [postsData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefreshing] = useState(false);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  // Hooks
  useEffect(() => {
    fetchPosts();
  }, []);

  // Get Posts Data Function
  const fetchPosts = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      console.log("🚀 ~ fetchPosts ~ response:", response);

      if (response.ok) {
        const data = await response.json();
        setPostData(data);
      } else {
        throw new Error("Unable to Fetch New Data");
      }
    } catch (error) {
      console.log(" Error : ", error);
    } finally {
      setLoading(false);
    }
  };

  // Create Post

    const createPost = async () => {
    if (!title?.trim() || !body?.trim()) {
        Alert.alert("Validation Error", "Please enter title and body");
        return;
    }

    try {
        setLoading(true);

        const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",

            body: JSON.stringify({
            title: title,
            body: body,
            userId: 1,
            }),

            headers: {
            "Content-type": "application/json; charset=UTF-8",
            },
        }
        );

        if (!res.ok) {
        throw new Error("Failed To Create New Post");
        }

        const newPostData = await res.json();

        console.log("Created Post:", newPostData);

        setPostData((prevPosts) => [newPostData, ...prevPosts]);

        Alert.alert("Success", "Post created successfully!");

        setTitle("");
        setBody("");

    } catch (error) {
        console.log("Error:", error);
        Alert.alert("Error", error.message);

    } finally {
        setLoading(false);
    }
    };


  // Handle Refreshing Function
  const handleRefresh = () => {
    setRefreshing(true);
    fetchPosts(20);
    setRefreshing(false);
  };

  // Header Component
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

  // Footer Component
  const ListFooter = () => {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          You have reached the end of the list!
        </Text>
      </View>
    );
  };

  // Separator Component
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
        <>
          <View style={styles.formContainer}>
            <Text style={styles.heading}>Create New Post</Text>

            {/* Title Input */}
            <Text style={styles.label}>Post Title</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter post title"
              value={title}
              onChangeText={setTitle}
            />

            {/* Body Input */}
            <Text style={styles.label}>Post Body</Text>

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Enter post description"
              value={body}
              onChangeText={setBody}
              multiline={true}
              numberOfLines={4}
            />

            {/* Submit Button */}
            {loading ? (
              <ActivityIndicator size="large" color="blue" />
            ) : (
              <Button
                title="Create Post"
                onPress={createPost}
              />
            )}
          </View>

          <FlatList
            data={postsData}
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

            // Pull To Refresh
            refreshing={refresh}
            onRefresh={handleRefresh}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
  },

  loader: {
    flex: 1,
  },

  formContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },

  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  listContent: {
    paddingBottom: 20,
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
    color: "#fff",
  },

  subHeader: {
    fontSize: 14,
    color: "#e3f2fd",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#fff",
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

  result: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  resultHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
