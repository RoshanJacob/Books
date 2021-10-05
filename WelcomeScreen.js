import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import BookAnimation from "../Components/WelcomeScreenBookAnimation";
import LottieView from "lottie-react-native";

export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <LottieView
          source={require("../assets/28893-book-loading.json")}
          autoPlay
          loop
        />
      </View>
    );
  }
}
