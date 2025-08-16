import { Animated, View } from 'react-native';

import { useAnimation } from '@/hooks/useAnimation';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemesButton from '@/presentation/shared/ThemesButton';

const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
    startMovingDownPosition,
  } = useAnimation();

  return (
    <ThemedView useMargin className="flex-1">
      <View className="flex-1 items-center justify-center">
        <Animated.View
          className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
          style={{
            width: 150,
            height: 150,
            opacity: animatedOpacity,
            transform: [{ translateY: animatedTop }],
          }}
        />
      </View>

      <View className="flex-row items-center justify-between w-full px-4 pb-20">
        <ThemesButton
          onPress={() => {
            fadeIn();
            startMovingTopPosition();
          }}
          classNameBtn="flex-1 mx-2"
        >
          FadeIn
        </ThemesButton>

        <ThemesButton
          onPress={() => {
            fadeOut();
            startMovingDownPosition();
          }}
          classNameBtn="flex-1 mx-2"
        >
          FadeOut
        </ThemesButton>
      </View>
    </ThemedView>
  );
};
export default Animation101Screen;
