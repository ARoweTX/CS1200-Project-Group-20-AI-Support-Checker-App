import { FontAwesome } from '@expo/vector-icons';
import { InferenceClient } from '@huggingface/inference';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, } from "react-native";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import BackButton from "./BackButton";

export default function AskQuestion() {
  const hf = new InferenceClient('Insert Key');
  const [input, setInput] = useState(""); // User input
  const [response, setResponse] = useState(""); // AI response
  const [submitted, setSubmitted] = useState(false); // Freeze flag
  const [rating, setRating] = useState(0); // Star rating
  const packageReview = async () => {
    const user = await AsyncStorage.getItem("activeUser");
    let username: string;
    username = user ? JSON.parse(user).username : "Anonymous";
    //const uuid = await uuidv4()
    //console.log(uuid)
    const newItem = {
      id: uuidv4(),
      question: input,
      response,
      rating: rating,
      username: username,
    };

    const existing = await AsyncStorage.getItem("ai_interactions");
    const list = existing ? JSON.parse(existing) : [];

    list.push(newItem);

    await AsyncStorage.setItem("ai_interactions", JSON.stringify(list));
    router.push("./reviewSubmission");
    return;
  }
  const handleSend = async () => {
    if (input.trim() === "") return;
    const prompt = `Provide a concise, effective answer to the following question. Respond using complete sentences, but do not amek them too long. Use as few sentences as possible and never more than 200 words. Do not respond with anything else other than your response, and ensure your response is entirely plaintext and has newline breaks when necessary:\n\n${input}`;
    const output = await hf.chatCompletion({
        model: "openai/gpt-oss-120b:fastest",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });
    setResponse(output.choices[0].message.content || "No response from model.");
    setSubmitted(true); // Freeze after submission
  };
  return (
    <View style={{ padding: 20 }}>
      <BackButton />
      <View style = {{ alignItems: "center"}}>
        <Text style={{ fontSize: 18, marginTop: 10 }}>❓ Ask a Question</Text>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderWidth: 1,
            padding: 10,
            borderRadius: 8,
            marginTop: 20,
            borderColor: "gray",
          }}
          value = {input}
          onChangeText={setInput}
          placeholder="Type your question here..."
          editable={!submitted}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            padding: 15,
            width: 200,
            marginTop: 20,
            borderRadius: 10,
          }}
          onPress={handleSend}
          disabled={submitted}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Submit Question</Text>
        </TouchableOpacity> 
        <Text
          style={{
            marginTop: 30,
            borderWidth: 1,
            padding: 10,
            borderRadius: 8,
            width: 300,
            minHeight: 100,
            borderColor: "gray",
            fontSize: 15,
          }}
        >
          {response}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)} disabled={!submitted}>
              <FontAwesome
                name={rating >= star ? "star" : "star-o"}
                size={32}
                color="gold"
                style={{ marginRight: 5, opacity: !submitted ? 0.5 : 1 }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            padding: 15,
            width: 200,
            marginTop: 20,
            borderRadius: 10,
            opacity: submitted ? 1 : 0.5,
          }}
          onPress={packageReview}
          disabled={!submitted}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Submit Review</Text>
        </TouchableOpacity> 
      </View>
    </View>
  );
}
