import { useRef } from 'react';
import { Animated, View } from 'react-native';

import ThemedView from '@/presentation/shared/ThemedView';
import ThemesButton from '@/presentation/shared/ThemesButton';

const Animation101Screen = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  // fadeIn ----
  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 333,
      useNativeDriver: true,
    }).start();
  };

  // fadeOut ----
  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 333,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ThemedView useMargin className="flex-1">
      <View className="flex-1 items-center justify-center">
        <Animated.View
          className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
          style={{ width: 150, height: 150, opacity: animatedOpacity }}
        />
      </View>

      <View className="flex-row items-center justify-between w-full px-4 pb-20">
        <ThemesButton onPress={fadeIn} classNameBtn="flex-1 mx-2">
          FadeIn
        </ThemesButton>

        <ThemesButton onPress={fadeOut} classNameBtn="flex-1 mx-2">
          FadeOut
        </ThemesButton>
      </View>
    </ThemedView>
  );
};
export default Animation101Screen;
