import { persistor, store } from '@/store';
import { useState } from 'react';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Text from './Theme/Text';
import { Button, ButtonText, GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import RootNavigator from './RootNavigator';

export default function RootLayoutNav() {
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
            <RootNavigator />
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
