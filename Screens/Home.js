import * as React from "react";
import { Text, View, ScrollView } from "react-native";
import Header from "../component/Homescreen/Header";
import Weather from "../component/Homescreen/Weather";
import Covid19 from "../component/Homescreen/Covid19";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Medical from "../component/Homescreen/Medical";

import { DarkAppColor, MainAppColor } from "../assets/Color";

export default function App() {
  console.log("Home");

  return (
    <View style={{ backgroundColor: DarkAppColor, marginBottom: 50 }}>
      <View
        style={{
          height: 50,
          width: "100%",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginRight: "4%",
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
            MediCare
          </Text>
        </View>
      </View>

      <ScrollView>
        <Header />
        <Weather />
        <Covid19 />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Book an Appointment
        </Text>
        <Medical />
      </ScrollView>
    </View>
  );
}
