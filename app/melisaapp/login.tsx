import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React from "react";
import { Button, Text, TextInput, View } from "react-native";


export default function Login() {
 const [username, setUsername] = React.useState("");
 const [password, setPassword] = React.useState("");
 const [error, setError] = React.useState("");


 const handleLogin = async () => {
   setError("");


   const storedUsers = await AsyncStorage.getItem("users");
   const users = storedUsers ? JSON.parse(storedUsers) : [];


   const user = users.find(
     (u: any) => u.username === username && u.password === password
   );


   if (!user) {
     setError("Invalid username or password");
     return;
   }


   await AsyncStorage.setItem("activeUser", JSON.stringify(user));


   router.push("./accountHome");
 };


 return (
   <View
     style={{
       flex: 1,
       backgroundColor: "#F7F6F6",
       padding: 20,
       justifyContent: "flex-start",
       alignItems: "center",
     }}
   >
     <Text style={{ fontSize: 30, fontWeight: "700", marginTop: 80 }}>
       Login
     </Text>


     {error ? (
       <Text style={{ color: "red", marginVertical: 10 }}>{error}</Text>
     ) : null}


     <Text style={{ fontSize: 18, marginTop: 40 }}>Username</Text>
     <TextInput
       style={{
         height: 40,
         width: 250,
         borderColor: "gray",
         borderWidth: 1,
         marginTop: 10,
         paddingHorizontal: 10,
         backgroundColor: "white",
       }}
       placeholder="Username"
       value={username}
       onChangeText={setUsername}
     />


     <Text style={{ fontSize: 18, marginTop: 20 }}>Password</Text>
     <TextInput
       secureTextEntry
       style={{
         height: 40,
         width: 250,
         borderColor: "gray",
         borderWidth: 1,
         marginTop: 10,
         paddingHorizontal: 10,
         backgroundColor: "white",
       }}
       placeholder="Password"
       value={password}
       onChangeText={setPassword}
     />


     <View style={{ marginTop: 30, width: 200 }}>
       <Button title="Login" onPress={handleLogin} />
     </View>


     <Text
       style={{
         marginTop: 20,
         color: "blue",
         textDecorationLine: "underline",
       }}
       onPress={() => router.push("./signup")}
     >
       Don't have an account? Sign Up
     </Text>
   </View>
 );
}
