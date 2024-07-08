import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { GluestackUIProvider, Button, ButtonText } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { useColorScheme } from '@/components/useColorScheme';
import { Slot } from 'expo-router';
export { ErrorBoundary } from 'expo-router';
import { Provider } from 'react-redux';
import { persistor, store } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Text } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={
          <>
            <Text>Loading....</Text>
          </>
        }
      >
        <GluestackUIProvider config={config} colorMode={theme ?? 'light'}>
          <ThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
          >
            <Slot />
            <Button
              onPress={() => setTheme((p) => (p === 'dark' ? 'light' : 'dark'))}
            >
              <ButtonText>Change Theme</ButtonText>
            </Button>
          </ThemeProvider>
        </GluestackUIProvider>
      </PersistGate>
    </Provider>
  );
}
