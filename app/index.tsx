import React from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Index() {
  const [username, setUsername] = React.useState("");
  const handlePress = () => {
    console.log("Username submitted:", username);
  };
  return (
    <View
      style={{
        backgroundColor: "dodgerBlue",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 30}}>Username</Text>
      <TextInput
      style = {{
        top: 100,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 200,
        backgroundColor: 'white',
      }}
      placeholder = "Username"
      value = {username}
      onChangeText = {setUsername}
      />
      <Button title = "Submit" onPress={handlePress} />
    </View>
  );
}
