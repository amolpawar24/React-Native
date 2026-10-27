
import React, { useState } from "react";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted:", username, password);

      setUsername("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.form}>
          <Image
            style={styles.image}
            source={require("../assets/splash-icon.png")}
            resizeMode="contain"
          />

          <Text style={styles.title}>Welcome Back</Text>

          <Text style={styles.label}>Username</Text>

          <TextInput
            style={[
              styles.input,
              errors.username ? styles.inputError : null,
            ]}
            placeholder="Enter your username"
            value={username}
            onChangeText={(text) => {
              setUsername(text);

              if (errors.username) {
                setErrors((prev) => ({
                  ...prev,
                  username: "",
                }));
              }
            }}
            autoCapitalize="none"
            autoCorrect={false}
          />

          {errors.username ? (
            <Text style={styles.errorText}>{errors.username}</Text>
          ) : null}

          <Text style={styles.label}>Password</Text>

          <TextInput
            style={[
              styles.input,
              errors.password ? styles.inputError : null,
            ]}
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);

              if (errors.password) {
                setErrors((prev) => ({
                  ...prev,
                  password: "",
                }));
              }
            }}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />

          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}

          <Button title="Login" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },

  form: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
    color: "#222222",
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },

  input: {
    height: 45,
    borderColor: "#dddddd",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  inputError: {
    borderColor: "red",
  },

  image: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 15,
  },

  errorText: {
    color: "red",
    marginBottom: 12,
    fontSize: 13,
  },
});
