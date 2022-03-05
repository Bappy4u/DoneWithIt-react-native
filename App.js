// Input
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
const PizzaTranslator = () => {
  const [text, setText] = useState("");
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ padding: 10, fontSize: 15 }}>Enter Your Name:</Text>
      <TextInput
        style={{
          padding: 10,
          height: 40,
          border: 1,
          backgroundColor: "#efefef",
        }}
        placeholder="Najmul Hossain"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 15 }}>Enter Your ID:</Text>
      <TextInput
        style={{
          padding: 10,
          height: 40,
          border: 1,
          backgroundColor: "#efefef",
        }}
        placeholder="CSE1802014027"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
    </View>
  );
};
export default PizzaTranslator;
