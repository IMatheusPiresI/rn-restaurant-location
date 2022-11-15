import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { enableLatestRenderer } from 'react-native-maps';

import theme from './styles/theme';

import 'react-native-gesture-handler';
// eslint-disable-next-line import/order
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './routes/Stack.routes';

export const App = () => {
  useEffect(() => {
    enableLatestRenderer();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
};
