import React, { Component } from "react";
import { Animated } from "react-native";

type TrackProps = {
  range: number[];
  animatedValue: Animated.Value;
  width: number;
  height: number;
  colors: {
    true: string;
    false: string;
  };
};

export default function Track(props: TrackProps) {
  const { range, animatedValue, width, height, colors } = props;

  const margin = Math.round(height / 26);
  const radius = Math.round(height / 2);

  const color = animatedValue.interpolate({
    inputRange: range,
    outputRange: [colors.false, colors.true],
  });

  const trackStyle = {
    backgroundColor: color,
    height: height - margin * 2,
    width: width - margin * 2,
    borderRadius: radius - margin,
    margin: margin,
  };

  return <Animated.View style={trackStyle} />;
}
