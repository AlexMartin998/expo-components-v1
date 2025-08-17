import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';

import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemesButton from '@/presentation/shared/ThemesButton';

const isIOs = Platform.OS === 'ios';

const ModalScreen2 = () => {
  return (
    <ThemedView
      className="justify-center items-center flex-1"
      bgColor="#A13582"
    >
      <ThemedText type="h2">Hi, I&apos;m a modal 2</ThemedText>

      <ThemesButton onPress={() => router.dismiss()} classNameBtn="my-2">
        Close 2
      </ThemesButton>

      <StatusBar style={isIOs ? 'light' : 'auto'} />
    </ThemedView>
  );
};

export default ModalScreen2;
