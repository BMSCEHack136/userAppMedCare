import React, { useState } from "react";
import { View, Image, Text } from "react-native";

// npm i react-native-swiper
import Swiper from "react-native-swiper";

export default function App() {
  console.log("Header");

  const [userData, setuserData] = useState([
    {
      img: "https://wallpapercave.com/dwp1x/wp10475822.jpg",
    },

    {
      img: "https://wallpapercave.com/dwp1x/wp10475823.jpg",
      name: "Christian Wilson",
    },
    {
      img: "https://wallpapercave.com/dwp1x/wp10475839.png",
      name: "Matthew Wagner",
    },
  ]);

  return (
    <View style={{ height: 200, marginTop: 5 }}>
      <Swiper
        loop={true}
        style={{ height: 350 }}
        autoplay={true}
        autoplayTimeout={4}
      >
        {userData.map((user) => (
          <View key={user} style={{ alignItems: "center" }}>
            <Image
              style={{
                width: "95%",
                height: 200,
                borderRadius: 10,
                marginRight: 5,
                marginLeft: 5,
              }}
              source={{ uri: user.img }}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
}
