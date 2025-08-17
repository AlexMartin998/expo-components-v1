import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import './../global.css';

import { allRoutes } from '@/constants/Routes';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

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
        {/* ------ Router ------- */}
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor,
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: '',
            }}
          />

          {allRoutes.map(route => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{
                title: route.title,
                headerShown: !route.title.includes('Slides'),
              }}
            />
          ))}
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
