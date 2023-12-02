import React from 'react';
import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import '../global.css';

SplashScreen.preventAutoHideAsync();

const RootLayout = (): JSX.Element | null => {
  const [fontsLoaded, fontError] = useFonts({
    LexendBold: require('@assets/fonts/Lexend-Bold.ttf'),
    LexendLight: require('@assets/fonts/Lexend-Light.ttf'),
    LexendRegular: require('@assets/fonts/Lexend-Regular.ttf'),
  });

  React.useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
};

export default RootLayout;
