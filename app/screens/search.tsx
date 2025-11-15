import { View, Text } from "react-native";
import BackButton from "./BackButton";


export default function Search() {
 return (
   <View style={{ padding: 20 }}>
     <BackButton />


     <Text style={{ fontSize: 22 }}>🔍 Search Questions</Text>
   </View>
 );
}
