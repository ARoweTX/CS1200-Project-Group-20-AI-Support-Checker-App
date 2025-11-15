import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
export default function ReviewSubmission() {
 return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
        <Text>Thank you for your contribution!</Text>
        <Text>Your review has been submitted successfully.</Text>
        <TouchableOpacity
                  style={{
                    backgroundColor: "blue",
                    padding: 15,
                    width: 200,
                    marginTop: 20,
                    borderRadius: 10,
                  }}
                  onPress={() => router.push('./accountHome')}
                >
                  <Text style={{ color: "white", textAlign: "center" }}>Return Home</Text>
                </TouchableOpacity>
    </View>
 )
}