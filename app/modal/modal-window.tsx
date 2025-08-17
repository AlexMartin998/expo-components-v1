import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';

import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemesButton from '@/presentation/shared/ThemesButton';

const isIOs = Platform.OS === 'ios';

const ModalScreen = () => {
  return (
    <ThemedView
      className="justify-center items-center flex-1"
      bgColor="#A52182"
    >
      <ThemedText type='h1'>Hi, I&apos;m a modal</ThemedText>

      <ThemesButton onPress={() => router.dismiss()} classNameBtn='my-3'>Close</ThemesButton>

      {/* ----------- */}
      <ThemesButton onPress={() => router.push('/modal/modal-window-2')} classNameBtn='my-3'>
        Another Modal
      </ThemesButton>
      {/* ----------- */}

      <StatusBar style={isIOs ? 'light' : 'auto'} />
    </ThemedView>
  );
};

export default ModalScreen;
