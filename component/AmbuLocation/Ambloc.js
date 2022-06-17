import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Platform, Text, View, StyleSheet, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export default function Ambloc() {
  // -------------------------------------------------------------------------------------------------------------
  const [Amblocation, setAmblocation] = useState({
    latitude: 12.9037432,
    longitude: 77.5193716,
  });
  const [isLoding, setIsloding] = useState(null);

  if (false) {
    return <View></View>;
  } else {
    const AmbList = Object.keys(Amblocation);
    return (
      <View>
        {AmbList.map((item) => {
          if (false) {
            return <View key={item}></View>;
          } else {
            return (
              // <View>{console.log(item)}</View>
              <Marker
                key={item}
                coordinate={{
                  latitude: Amblocation["latitude"],
                  longitude: Amblocation["longitude"],
                }}
                title={item}
                onPress={() => console.log("marker_curr")}
                // icon={require("./Bus.png")}
              />
            );
          }
        })}
      </View>
    );
  }
}
