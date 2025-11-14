import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { router } from "expo-router";


export default function BackButton() {
 return (
   <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
     <Text style={styles.backText}>← Back</Text>
   </TouchableOpacity>
 );
}


const styles = StyleSheet.create({
 backButton: {
   paddingVertical: 10,
   paddingHorizontal: 15,
   marginBottom: 15,
   alignSelf: "flex-start",
 },
 backText: {
   fontSize: 18,
   color: "#4a90e2",
   fontWeight: "500",
 },
});
