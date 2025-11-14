import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";


export default function AccountHome() {
 return (
   <View style={styles.container}>
     <Text style={styles.title}>Welcome to Your AI Helper</Text>
     <Text style={styles.subtitle}>Choose an option below</Text>


     {/* SEARCH */}
     <TouchableOpacity
       style={styles.button}
       onPress={() => router.push("/melisaapp/search")}
     >
       <Text style={styles.buttonText}>🔍 Search Questions</Text>
     </TouchableOpacity>


     {/* ASK QUESTION */}
     <TouchableOpacity
       style={styles.button}
       onPress={() => router.push("/melisaapp/askQuestion")}
     >
       <Text style={styles.buttonText}>❓ Ask a Question</Text>
     </TouchableOpacity>


     {/* TOP ANSWERS */}
     <TouchableOpacity
       style={styles.button}
       onPress={() => router.push("/melisaapp/topAnswers")}
     >
       <Text style={styles.buttonText}>⭐ Top Supported Answers</Text>
     </TouchableOpacity>


     {/* PROFILE (YOU REQUESTED THIS) */}
     <TouchableOpacity
       style={[styles.button, { backgroundColor: "#6a4ce2" }]}
       onPress={() => router.push("/melisaapp/profile")}
     >
       <Text style={styles.buttonText}>👤 Go to Profile</Text>
     </TouchableOpacity>


   </View>
 );
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#f7f9fc",
   padding: 20,
   justifyContent: "center",
 },
 title: {
   fontSize: 28,
   fontWeight: "bold",
   textAlign: "center",
   marginBottom: 5,
 },
 subtitle: {
   fontSize: 16,
   textAlign: "center",
   marginBottom: 30,
   color: "gray",
 },
 button: {
   backgroundColor: "#4a90e2",
   padding: 15,
   borderRadius: 12,
   marginVertical: 10,
 },
 buttonText: {
   color: "white",
   fontSize: 18,
   textAlign: "center",
   fontWeight: "500",
 },
});
