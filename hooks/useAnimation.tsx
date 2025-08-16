import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  // fadeIn ----
  const fadeIn = ({
    duration = 300,
    toValue = 1,
    easing = Easing.linear,
    useNativeDriver = true,
    callback = () => {},
  } = {}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration,
      useNativeDriver: useNativeDriver,
      easing,
    }).start(callback);
  };

  const startMovingTopPosition = ({
    initialPosition = -100,
    duration = 500,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.bounce,
    callback = () => {},
  } = {}) => {
    animatedTop.setValue(initialPosition);

    Animated.timing(animatedTop, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(callback);
  };

  // fadeOut ----
  const fadeOut = ({
    duration = 300,
    toValue = 0,
    easing = Easing.ease,
    useNativeDriver = true,
    callback = () => {},
  } = {}) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(callback);
  };

  const startMovingDownPosition = ({
    initialPosition = 0,
    duration = 500,
    toValue = 100,
    useNativeDriver = true,
    easing = Easing.bounce,
    callback = () => {},
  } = {}) => {
    Animated.timing(animatedTop, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(callback);
  };

  return {
    animatedOpacity,
    animatedTop,

    fadeIn,
    fadeOut,
    startMovingTopPosition,
    startMovingDownPosition,
  };
};
