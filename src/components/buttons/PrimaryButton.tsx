import React from "react";
import { Button } from "react-native";

export default function PrimaryButton(): JSX.Element {
  function dummyOnPress() {
    console.log("Primary button pressed");
  }

  return <Button title="Press me" onPress={dummyOnPress} />;
}
