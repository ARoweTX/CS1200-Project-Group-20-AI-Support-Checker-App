import { FontAwesome } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import React from "react";
import { Text, View } from "react-native";
import BackButton from "./BackButton";

export default function Details() {
    const { username, question, response, rating } = useLocalSearchParams();
    var ratingNum = 0;
    if (typeof rating === "string") {
        ratingNum = parseInt(rating, 10);
    }
    return (
        <View style={{ padding: 20 }}>
      <BackButton />
      <View style = {{ alignItems: "center"}}>
        <Text style={{ fontSize: 18, marginTop: 10 }}>{username}</Text>
        <Text style={{
            height: 40,
            width: 300,
            borderWidth: 1,
            padding: 10,
            borderRadius: 8,
            marginTop: 20,
            borderColor: "gray",
          }}>
            {question}
          </Text>
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
            <FontAwesome
            name={ratingNum >= star ? "star" : "star-o"}
            size={32}
            color="gold"
            style={{ marginRight: 5}}
            />
          ))}
        </View>
      </View>
    </View>
    );
}
