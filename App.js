import React from "react";
import { View, StyleSheet, Text } from "react-native";
import WelcomeScreen from "./Screens/WelcomeScreen";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <WelcomeScreen />
      </View>
    );
  }
}
