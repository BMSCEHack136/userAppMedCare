import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import Modal from "react-native-paper";

import { WebView } from "react-native-webview";
import { Overlay } from "react-native-elements";
import {
  blue,
  DarkAppColor,
  MainAppColor,
  MainFontColor,
} from "../../assets/Color";

import * as WebBrowser from "expo-web-browser";

export default function App() {
  const [isLoadingTop, setLoadingTop] = useState(true);
  const [TopNews, setTopNews] = useState([]);

  const [isLoadingIndia, setLoadingIndia] = useState(true);
  const [BanData, setBanData] = useState([]);

  const [isLoadingBangalore, setLoadingBangalore] = useState(true);
  const [IndiaData, setIndiaData] = useState([]);

  const [newsUrl, setNewsUrl] = useState("");
  const [showPopover, setShowPopover] = useState(false);

  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async (linkUrl) => {
    let result = await WebBrowser.openBrowserAsync(linkUrl);
    setResult(result);
  };

  const toggleOverlay = () => {
    setShowPopover(!showPopover);
  };

  useEffect(() => {
    fetch(
      "https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/NEWS/NDTV.json"
    )
      .then((response) => response.json())
      .then((json) => setTopNews(json))
      .catch((error) => console.error(error))
      .finally(() => setLoadingTop(false));
  }, []);

  useEffect(() => {
    fetch(
      "https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/NEWS/Bangalore.json"
    )
      .then((response) => response.json())
      .then((json) => setBanData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoadingBangalore(false));
  }, []);

  useEffect(() => {
    fetch(
      "https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/NEWS/mint.json"
    )
      .then((response) => response.json())
      .then((json) => setIndiaData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoadingIndia(false));
  }, []);

  // console.log(IndiaData);

  if (isLoadingIndia || isLoadingBangalore || isLoadingTop) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          backgroundColor: DarkAppColor,
          flex: 1,
        }}
      >
        <Text>{IndiaData["message"]}</Text>
        <Text style={{ color: blue, fontSize: 25, padding: 15 }}>
          Loading...
        </Text>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: DarkAppColor,
      }}
    >
      <ScrollView>
        <View
          style={{
            borderBottomWidth: 5,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 5,
          }}
        >
          <View
            style={{
              borderBottomWidth: 5,
              borderTopW: 5,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 5,
            }}
          >
            <View
              style={{
                backgroundColor: MainAppColor,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                borderWidth: 2,
                marginBottom: 5,
                marginTop: 5,
              }}
            >
              <Text style={{ fontSize: 35, color: "white" }}>
                Bangalore's News
              </Text>
            </View>
          </View>
          {BanData.map((item) => {
            return (
              <TouchableOpacity
                key={item["title"]}
                onPress={() => {
                  _handlePressButtonAsync(item["url"]);
                  setNewsUrl(item["url"]);
                }}
              >
                <View
                  style={{
                    width: Dimensions.get("window").width,
                    borderBottomColor: MainAppColor,
                    borderBottomWidth: 1,
                    padding: 20,
                    marginBottom: 10,
                    marginLeft: 10,
                    flexDirection: "row-reverse",
                  }}
                >
                  <Image
                    source={{
                      uri: item["img"],
                    }}
                    style={{
                      width: 90,
                      height: 80,
                      borderRadius: 10,
                    }}
                  />
                  <View style={{ flex: 1, marginHorizontal: 10 }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      {item["title"]}
                    </Text>
                    {/* <Text></Text> */}
                    <Text style={{ marginTop: 5, color: MainFontColor }}>
                      {item["date"]}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}

          <View
            style={{
              backgroundColor: MainAppColor,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              borderWidth: 2,
              marginBottom: 5,
            }}
          >
            <Text style={{ fontSize: 35, color: "white" }}>India's News</Text>
          </View>
        </View>
        {IndiaData.map((item) => {
          return (
            <TouchableOpacity
              key={item["title"]}
              onPress={() => {
                _handlePressButtonAsync(item["url"]);
                setNewsUrl(item["url"]);
                // setShowPopover(true);
              }}
            >
              <View
                style={{
                  width: Dimensions.get("window").width,
                  borderBottomColor: MainAppColor,
                  borderBottomWidth: 1,
                  padding: 20,
                  marginBottom: 10,
                  marginLeft: 10,
                  flexDirection: "row-reverse",
                }}
              >
                <Image
                  source={{
                    uri: item["img"],
                  }}
                  style={{
                    width: 90,
                    height: 80,
                    borderRadius: 10,
                  }}
                />
                <View style={{ flex: 1, marginHorizontal: 10 }}>
                  <Text
                    style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
                  >
                    {item["title"]}
                  </Text>

                  <Text style={{ marginTop: 3, color: MainFontColor }}>
                    {item["date"]}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
