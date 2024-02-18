import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { Provider as ReduxProvider } from 'react-redux';
import Store from './redux/Store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  
  <StrictMode>
  <ReduxProvider store={Store}>
  <ChakraProvider theme={theme}>
    {/* <ColorModeSwitcher/> */}
    <ColorModeScript />
    <App />
    </ChakraProvider>
    </ReduxProvider>
  </StrictMode>
);
