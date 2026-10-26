import React, { useState } from "react";
import { Button, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={200} style={styles.container}>
      <View style={styles.form}>
        <Image style={styles.image} source={require("../assets/splash-icon.png")}/>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Passord</Text>
        <TextInput style={styles.input} placeholder="Enter your password" value={password} onChangeText={setpassword
          
        } />

        <Button title="Login" onPress={() => {}} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },

  image: {
    width: 200,
    height: 400,
    alignSelf: "center",
    marginBottom: 50
  }
});
