import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Image,
  Linking,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Card from "../../assets/Card";

import {
  MainFontColor,
  MainAppColor,
  DarkAppColor,
  blue,
} from "../../assets/Color";

export default function Medical() {
  const [list, setList] = useState([]);
  async function fetchUrl() {
    const URL =
      "https://exlfit6t23.execute-api.us-east-1.amazonaws.com/ver1/hospital-list";
    let res = await fetch(URL);
    let data = await res.json();
    setList(data["data"]);
  }

  fetchUrl();
  return (
    <View
      style={{
        justifyContent: "center",
        paddingLeft: 45,
      }}
    >
      {list.map((item, index) => {
        return (
          <View key={index}>
            <TouchableOpacity>
              <View style={styles.card}>
                <Text style={{ fontSize: 20, color: "white" }}>
                  {item.Name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
    maxWidth: "90%",
    alignItems: "center",
    shadowColor: "black",
    backgroundColor: MainAppColor,
    shadowOpacity: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 10,
    borderRadius: 10,
  },
});
