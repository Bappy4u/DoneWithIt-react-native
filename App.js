// first ct
/*


import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  SectionList,
  StatusBar,
} from "react-native";

const Separator = () => <View style={styles.separator} />;
const DATA = [
  {
    title: "Best Friends",
    data: ["Himel", "Safayet", "Nahid", "Najmul", "Aoyon"],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
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
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles2.header}>{title}</Text>
      )}
    />
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
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

export default App;

*/

import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, StyleSheet } from "react-native";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data["data"]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "green",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            User List
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "gray",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            Najmul Hossain, CSE1802014027
          </Text>

          <FlatList
            data={data["data"]}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{ margin: "auto" }}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: item.avatar,
                  }}
                />
                <Text style={{ fontWeight: "500" }}>
                  {item.id + "."} Full Name: {item.first_name}
                  {item.last_name}
                </Text>
                <Text style={{ fontWeight: "500" }}>Email: {item.email}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    marginTop: 40,
    marginBottom: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default App;
