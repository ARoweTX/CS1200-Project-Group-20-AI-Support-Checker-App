import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    console.log("SIGNUP CLICKED");

    setError("");

    if (!username || !password1 || !password2) {
      setError("All fields are required.");
      return;
    }

    if (password1 !== password2) {
      setError("Passwords do not match.");
      return;
    }

    const newUser = {
      username,
      email: "",
      password: password1,
      profilePic: "",
    };

    try {
      await AsyncStorage.setItem("activeUser", JSON.stringify(newUser));
      router.push("/melisaapp/accountHome");
    } catch (e) {
      console.log("SAVE ERROR:", e);
      setError("Could not save account.");
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 50 }}>
      {/* Back button */}
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={{ fontSize: 18, color: "blue", marginBottom: 20 }}>
          ← Back
        </Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
        Create Account
      </Text>

      {error ? (
        <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
      ) : null}

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 10,
          borderRadius: 8,
          marginBottom: 10,
        }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password1}
        onChangeText={setPassword1}
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 10,
          borderRadius: 8,
          marginBottom: 10,
        }}
      />

      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={password2}
        onChangeText={setPassword2}
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 10,
          borderRadius: 8,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={handleSignup}
        style={{
          backgroundColor: "green",
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
        }}
      >
        <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/melisaapp/login")}>
        <Text style={{ textAlign: "center", fontSize: 16, color: "blue" }}>
          Already have an account? Log in
        </Text>
      </TouchableOpacity>
    </View>
  );
}
