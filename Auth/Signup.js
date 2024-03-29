import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Icon } from "react-native-elements";
import { MainAppColor, DarkAppColor } from "../assets/Color";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ setId }) {
  var temId = "";
  var temPass = "";
  var message = "";

  async function fetchUrl() {
    const URL = `https://exlfit6t23.execute-api.us-east-1.amazonaws.com/ver1/user-login?id=${temId}&pass=${temPass}`;
    console.log(URL);
    let res = await fetch(URL);
    let data = await res.json();
    console.log(data, "Login");

    if (data["message"] === "success") {
      setId(temId);
    } else {
      message = data["message"];
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
              <Icon
                color="#fff"
                name="comments"
                type="font-awesome"
                size={50}
              />
            </View>
            <Text style={styles.loginTitleText}>Login</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Patient Id</Text>
              <TextInput
                style={styles.input}
                textContentType="password"
                onChangeText={(e) => {
                  temId = e;
                }}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={(e) => {
                  temPass = e;
                }}
              />
            </View>
            <View style={styles.inputBox}>
              <Text>{message}</Text>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={fetchUrl}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            color: "white",
            marginTop: 250,
            fontSize: 30,
            textAlign: "center",
          }}
        >
          MediCare
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: DarkAppColor,
    justifyContent: "center",
  },

  centerizedView: {
    width: "100%",
    top: "15%",
  },
  authBox: {
    width: "80%",
    backgroundColor: "#fafafa",
    borderRadius: 20,
    alignSelf: "center",
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: MainAppColor,
    borderRadius: 1000,
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: -50,
    marginBottom: -50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  hr: {
    width: "100%",
    height: 0.5,
    backgroundColor: "blue",
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#dfe4ea",
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: DarkAppColor,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
