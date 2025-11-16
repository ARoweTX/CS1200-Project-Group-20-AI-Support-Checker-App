import { router } from "expo-router";
import React from "react";
import { Button, ScrollView, Text, View } from "react-native";

export default function howToUse() {
  return (
    <View
      style={{
        backgroundColor: "dodgerBlue",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 20,
      }}
    >
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: 'black' }}>
          How to Use
        </Text>
        <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 15, color: 'black' }}>
          Getting started with the AI Question Support Checker App is easy!
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 15, color: 'black' }}>
          1. Enter Your Username: On the home screen, type in a username and hit "Submit" to get started. This helps personalize your experience.
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 15, color: 'black' }}>
          2. Explore AI Queries: Browse AI prompts and responses shared by other users. Use the support features to upvote or downvote based on helpfulness.
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 15, color: 'black' }}>
          3. Voice Your Opinion: Show support for queries and responses you find useful. This community feedback helps highlight the best AI-generated content.
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 15, color: 'black' }}>
          4. Find the Best Answers: Quickly filter and find highly supported queries to get reliable AI assistance.
        </Text>
        <Text style={{ fontSize: 14, textAlign: 'center', color: 'black' }}>
          Tip: Check out the "About Us" page for more details on the app's purpose. Enjoy exploring!
        </Text>
      </ScrollView>
      
      <View style={{ position: 'absolute', bottom: 20 }}>
        <Button 
          title="Back to Home" 
          onPress={() => router.back()} 
        />
      </View>
    </View>
  );
}