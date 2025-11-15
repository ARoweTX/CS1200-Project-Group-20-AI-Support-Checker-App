import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import BackButton from "./BackButton";


export default function Search() {
  const [entries, setEntries] = useState<Array<{ question: string; response: string; rating: number; createdAt: number }>>([]);
  useEffect(() => {
    loadEntries();
  }, []);

  async function loadEntries() {
    console.log("Loading entries...");
    try {
      const stored = await AsyncStorage.getItem("ai_interactions");
      if (stored) {
        setEntries(JSON.parse(stored));
      }
    } catch (error) {
      console.log("Error loading:", error);
    }
  }
 return (
   <View style={{ padding: 20 }}>
     <BackButton />
      <View style={{alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Search Screen</Text>
        <ScrollView style={{width: '100%', height: '88%', marginTop: 20 }}>
          {entries.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.question}>Q: {item.question}</Text>
              <View style={{ flexDirection: "row", marginTop: 20 }}>
              {[1, 2, 3, 4, 5].map((star) => (
                  <FontAwesome
                    name={item.rating >= star ? "star" : "star-o"}
                    size={32}
                    color="gold"
                    style={{ marginRight: 5}}
                  />
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
   </View>
 );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  question: {
    fontWeight: "bold",
    marginBottom: 6,
  },
  response: {
    marginBottom: 6,
  },
});
