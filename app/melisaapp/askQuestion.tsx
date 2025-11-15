import { InferenceClient } from '@huggingface/inference';
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, } from "react-native";
import BackButton from "./BackButton";

export default function AskQuestion() {
  const hf = new InferenceClient('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');
  const [input, setInput] = useState(""); // User input
  const [response, setResponse] = useState(""); // AI response
  const [submitted, setSubmitted] = useState(false); // Freeze flag
  const handleSend = async () => {
    if (input.trim() === "") return;
    const prompt = `Provide a concise, effective answer to the following question. Respond using complete sentences, but do not amek them too long. Use as few sentences as possible and never more than 200 words. Do not respond with anything else other than your response, and ensure your response is entirely plaintext and has newline breaks when necessary:\n\n${input}`;

    // Replace this with actual AI API call
    const output = await hf.chatCompletion({
        model: "openai/gpt-oss-120b:cheapest",
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
      </View>
    </View>
  );
}
