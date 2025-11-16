import { router } from "expo-router";
import React from "react";
import { Button, ScrollView, Text, View } from "react-native";

export default function AboutUs() {
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
          About Us
        </Text>
        <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 15, color: 'black' }}>
          Welcome to the AI Question Support Checker App!
        </Text>
        <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 15, color: 'black' }}>
          We are a team of freshmen at the University of Texas at Dallas (UTD), developing this app as part of our class project. Our goal is to create a simple, user-friendly tool that enhances the AI experience by adding a layer of human feedback.
        </Text>
        <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 15, color: 'black' }}>
          The AI Question Support Checker App allows users to show their support for AI prompts and responses. This helps users voice how helpful AI responses are and quickly find the best AI queries created by others.
        </Text>
        <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 15, color: 'black' }}>
          We chose this concept because AI responses can vary greatly in quality, and this human input layer helps users discover the most reliable answers efficiently.
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'black' }}>
          Thank you for using our app! We're excited to learn and build more.
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