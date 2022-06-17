import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Newss from "../component/Information/Newss";
import { blue, DarkAppColor, MainAppColor } from "../assets/Color";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  console.log("informatin");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Newss />
    </SafeAreaView>
  );
}
