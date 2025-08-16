import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedView from '@/presentation/shared/ThemedView';
import { Text } from 'react-native';
import './../global.css';

export default function RootLayout() {
  // dark mode ----
  const backgroundColor = useThemeColor({}, 'background');

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: backgroundColor, flex: 1 }} // upd bg color with useThemeColor
    >
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <ThemedView useMargin>
          <Text className="mt-10 text-3xl text-light-text dark:text-dark-text">
            Hello
          </Text>
        </ThemedView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
