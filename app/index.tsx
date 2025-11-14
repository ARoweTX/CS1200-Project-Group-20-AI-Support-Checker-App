import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";


export default function Index() {
 return (
   <View
     style={{
       flex: 1,
       justifyContent: "center",
       alignItems: "center",
     }}
   >
     <Text style={{ fontSize: 24, marginBottom: 40 }}>Welcome!</Text>


     <TouchableOpacity
       onPress={() => router.push("/melisaapp/login")}
       style={{
         backgroundColor: "blue",
         padding: 15,
         width: 200,
         marginBottom: 20,
         borderRadius: 10,
       }}
     >
       <Text style={{ color: "white", textAlign: "center" }}>Log In</Text>
     </TouchableOpacity>


     <TouchableOpacity
       onPress={() => router.push("/melisaapp/signup")}
       style={{
         backgroundColor: "green",
         padding: 15,
         width: 200,
         borderRadius: 10,
       }}
     >
       <Text style={{ color: "white", textAlign: "center" }}>Sign Up</Text>
     </TouchableOpacity>
   </View>
 );
}
