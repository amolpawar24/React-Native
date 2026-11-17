
import React, { useState } from "react";

import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PostRequestByFetch() {
  // States
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState(null);

  // POST request
  const createPost = async () => {
    if (!title.trim() || !body.trim()) {
      Alert.alert("Validation Error", "Please enter title and body");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
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

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const data = await response.json();

      console.log("Created Post:", data);

      setPostData(data);

      Alert.alert("Success", "Post created successfully!");

      setTitle("");
      setBody("");
    } catch (error) {
      console.log("POST Error:", error);
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
        <Button title="Create Post" onPress={createPost} />
      )}

      {/* Response Data */}
      {postData && (
        <View style={styles.result}>
          <Text style={styles.resultHeading}>
            Created Post Details
          </Text>

          <Text>Post ID: {postData.id}</Text>
          <Text>Title: {postData.title}</Text>
          <Text>Body: {postData.body}</Text>
          <Text>User ID: {postData.userId}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },

  textArea: {
    height: 120,
    textAlignVertical: "top",
  },

  result: {
    backgroundColor: "white",
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
