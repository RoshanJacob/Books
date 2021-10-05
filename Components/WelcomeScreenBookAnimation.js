import React from "react";
import LottieView from "lottie-react-native";

export default class BookAnimation extends React.Component {
  render() {
    return (
      <LottieView
        source={require("../assets/28893-book-loading.json")}
        autoPlay
        loop
      />
    );
  }
}
