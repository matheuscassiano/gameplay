import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import SignIn from "./src/screens/SignIn";

export default function App() {
  return (
    <>
      <SignIn />
      <StatusBar style="auto" />
    </>
  );
}
