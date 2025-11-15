import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Profile() {
 const [user, setUser] = useState({
   username: "",
   email: "",
   password: "",
   profilePic: "",
 });


 const [editing, setEditing] = useState(false);


 // Load user data
 useEffect(() => {
   const loadUser = async () => {
     const savedUser = await AsyncStorage.getItem("activeUser");
     if (savedUser) {
       setUser(JSON.parse(savedUser));
     }
   };
   loadUser();
 }, []);


 // Pick an image
 const pickImage = async () => {
   const result = await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.Images,
     quality: 1,
   });


   if (!result.canceled) {
     setUser({ ...user, profilePic: result.assets[0].uri });
   }
 };


 // Save changes
 const saveProfile = async () => {
   await AsyncStorage.setItem("activeUser", JSON.stringify(user));
   setEditing(false);
   Alert.alert("Success", "Profile updated!");
 };


 return (
   <View style={{ flex: 1, padding: 20 }}>
     <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
       Profile
     </Text>


     {/* Profile Picture */}
     <TouchableOpacity onPress={pickImage} style={{ alignSelf: "center" }}>
       <Image
         source={
           user.profilePic
             ? { uri: user.profilePic }
             : require("../../assets/images/defaultProfile.png")
         }
         style={{
           width: 120,
           height: 120,
           borderRadius: 60,
           backgroundColor: "#ddd",
           marginBottom: 10,
         }}
       />
       <Text style={{ textAlign: "center", color: "blue" }}>
         Change Profile Picture
       </Text>
     </TouchableOpacity>


     {/* Username */}
     <Text style={{ marginTop: 20 }}>Username</Text>
     <TextInput
       editable={editing}
       style={{
         borderWidth: 1,
         padding: 10,
         borderRadius: 8,
         marginTop: 5,
       }}
       value={user.username}
       onChangeText={(text) => setUser({ ...user, username: text })}
     />


     {/* Email */}
     <Text style={{ marginTop: 20 }}>Email</Text>
     <TextInput
       editable={editing}
       style={{
         borderWidth: 1,
         padding: 10,
         borderRadius: 8,
         marginTop: 5,
       }}
       value={user.email}
       onChangeText={(text) => setUser({ ...user, email: text })}
     />


     {/* Password */}
     <Text style={{ marginTop: 20 }}>Password</Text>
     <TextInput
       editable={editing}
       secureTextEntry={true}
       style={{
         borderWidth: 1,
         padding: 10,
         borderRadius: 8,
         marginTop: 5,
       }}
       value={user.password}
       onChangeText={(text) => setUser({ ...user, password: text })}
     />


     {/* Buttons */}
     {!editing ? (
       <>
         <TouchableOpacity
           onPress={() => setEditing(true)}
           style={{
             backgroundColor: "blue",
             padding: 15,
             borderRadius: 10,
             marginTop: 40,
           }}
         >
           <Text style={{ color: "white", textAlign: "center" }}>
             Edit Profile
           </Text>
         </TouchableOpacity>


         {/* Go to Account Home */}
         <TouchableOpacity
           onPress={() => router.push("./accountHome")}
           style={{
             backgroundColor: "purple",
             padding: 15,
             borderRadius: 10,
             marginTop: 15,
           }}
         >
           <Text style={{ color: "white", textAlign: "center" }}>
             Go to Account Home
           </Text>
         </TouchableOpacity>
       </>
     ) : (
       <View style={{ marginTop: 40 }}>
         <TouchableOpacity
           onPress={saveProfile}
           style={{
             backgroundColor: "green",
             padding: 15,
             borderRadius: 10,
             marginBottom: 10,
           }}
         >
           <Text style={{ color: "white", textAlign: "center" }}>Save</Text>
         </TouchableOpacity>


         <TouchableOpacity
           onPress={() => setEditing(false)}
           style={{
             backgroundColor: "gray",
             padding: 15,
             borderRadius: 10,
           }}
         >
           <Text style={{ color: "white", textAlign: "center" }}>Cancel</Text>
         </TouchableOpacity>
       </View>
     )}
   </View>
 );
}


