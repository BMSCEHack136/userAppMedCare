import * as React from "react";
import { Text, View, SafeAreaView, Button, Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import BuyProduct from "../component/Ecommerce/BuyProduct";
import { blue, DarkAppColor } from "../assets/Color";

export default function App() {
  console.log("Ecom");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BuyProduct />
    </SafeAreaView>
  );
}
