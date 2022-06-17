import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Image,
  Button,
  Linking,
} from "react-native";
import { DarkAppColor, MainAppColor, MainFontColor } from "../../assets/Color";

export default function BuyProduct() {
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState({
    Product_0: {
      ProductName: "Coronil kit",
      condition: "",
      price: "545",
      url: "https://www.netmeds.com/images/product-v1/150x150/947142/patanjali_divya_swasari_coronil_kit_0_0.jpg",
    },
    Product_1: {
      ProductName: "Dettol",
      condition: "Good",
      price: "185",
      url: "https://www.netmeds.com/images/product-v1/150x150/835057/dettol_antiseptic_liquid_550_ml_0_1.jpg",
    },
    Product_2: {
      ProductName: "Protin",
      condition: "Like New",
      price: 300,
      url: "https://www.netmeds.com/images/product-v1/150x150/889024/pro360_ortho_nutritional_powder_vanilla_flavour_250_gm_0_2.jpg",
    },
  });

  console.log(product);
  const productList = Object.keys(product);
  console.log("BuyPro");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: DarkAppColor,
      }}
    >
      <ScrollView>
        {productList.map((item) => {
          return (
            <View
              key={item}
              style={{
                width: Dimensions.get("window").width,

                flex: 1,

                marginBottom: 10,
                borderBottomWidth: 5,
                borderBottomColor: MainFontColor,
                paddingBottom: 10,
              }}
            >
              <View style={{ alignItems: "center", padding: 3 }}>
                <Text
                  style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
                >
                  {product[item]["ProductName"]}
                </Text>
              </View>
              <Image
                style={{
                  width: "90%",
                  height: 190,
                  borderRadius: 10,
                  marginRight: 5,
                  marginLeft: 15,
                }}
                source={{ uri: product[item]["url"] }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                  paddingHorizontal: 20,
                  paddingBottom: 5,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Condition: {product[item]["condition"]}
                </Text>
                <Text style={{ marginRight: 30, fontSize: 20, color: "white" }}>
                  ₹{product[item]["price"]}
                </Text>
              </View>
              <Button
                color={MainAppColor}
                title="BUY NOW!!"
                onPress={() =>
                  Linking.openURL(
                    `whatsapp://send?phone=${918521954141}&text=${
                      "Hii: ,\nWant to Buy: " +
                      item +
                      "\n" +
                      product[item]["ProductName"]
                    }`
                  )
                }
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
