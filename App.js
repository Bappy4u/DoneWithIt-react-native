import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
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
      />
      <Text style={{ padding: 10, fontSize: 15 }}>Enter Your Roll/ID:</Text>
      <TextInput
        style={{
          padding: 10,
          height: 40,
          border: 1,
          backgroundColor: "#efefef",
        }}
        placeholder="CSE1802014027"
      />
    </View>
    <View>
      <Button title="Submit" />
    </View>
    <Separator />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
