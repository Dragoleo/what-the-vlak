import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useFonts } from 'expo-font';

import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    "Poppins": require("@/assets/fonts/Poppins-Regular.ttf"),
    "PoppinsI": require("@/assets/fonts/Poppins-Italic.ttf"),
    "PoppinsB": require("@/assets/fonts/Poppins-Bold.ttf"),
    "PoppinsSB": require("@/assets/fonts/Poppins-SemiBold.ttf"),
    "PoppinsL": require("@/assets/fonts/Poppins-ExtraLight.ttf"),
    "PoppinsLI": require("@/assets/fonts/Poppins-ExtraLightItalic.ttf")

  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
