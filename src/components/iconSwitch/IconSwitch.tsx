import React, { useEffect, useState } from "react";
import {
  Animated,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
import Thumb from "./Thumb";
import Track from "./Track";

type IconSwitchProps = {
  value: boolean;
  animationDuration?: number;
  onValueChange: (value: boolean) => void;
  style?: { height: number; width: number };
  trackColor: {
    true: string;
    false: string;
  };
  thumbColor: {
    true: string;
    false: string;
  };
  iconColors: {
    true: string;
    false: string;
  };
};

export default function SwitchWithIcons(props: IconSwitchProps) {
  const {
    value,
    animationDuration,
    onValueChange,
    style,
    trackColor,
    iconColors,
    thumbColor,
  } = props;

  const [pressIndicator, setPressIndicator] = useState<boolean>(false);

  let _animatedValue: Animated.Value;
  let _maxAnimatedValue: number = 0;
  let _minAnimatedValue: number = 180;
  let _animationDuration: number;
  let _animatedRange: number[];
  let _listenerId: string;

  _animatedValue = new Animated.Value(
    props.value ? _maxAnimatedValue : _minAnimatedValue
  );

  useEffect(() => {
    setPressIndicator(false);

    _listenerId = _animatedValue.addListener(({ value }) => {
      if (
        pressIndicator &&
        (value === _minAnimatedValue || value === _maxAnimatedValue)
      ) {
        setPressIndicator(false);
      }
    });

    if (pressIndicator) {
      Animated.timing(_animatedValue, {
        toValue: props.value ? _maxAnimatedValue : _minAnimatedValue,
        duration: _animationDuration,
        useNativeDriver: false,
      }).start();
    }

    return () => {
      _animatedValue.removeListener(_listenerId);
    };
  }, [value]);

  _animationDuration = animationDuration || 200;

  _maxAnimatedValue = 100;
  _minAnimatedValue = 0;
  _animatedRange = [_minAnimatedValue, _maxAnimatedValue];

  function _handlePress() {
    setPressIndicator(true);

    const value = !props.value;

    if (onValueChange) {
      onValueChange(value);
    }
  }

  return (
    <View style={style}>
      <TouchableWithoutFeedback onPress={_handlePress}>
        <View style={styles.container}>
          <Track
            range={_animatedRange}
            animatedValue={_animatedValue}
            width={style?.width || 52}
            height={17}
            colors={trackColor}
          />
          <Thumb
            range={_animatedRange}
            animatedValue={_animatedValue}
            pressIndicator={pressIndicator}
            size={25}
            value={!!value}
            colors={thumbColor}
            width={style?.width || 40}
            height={style?.height || 17}
            iconColors={iconColors}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center" },
});
