import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { App } from './App';
import { store } from './store';
import { GlobalStyles } from './styles/globalStyles';
import { Theme } from './styles/theme';
import { AlertProvider } from './shared/contexts/alertContext';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <AlertProvider>
        <Provider store={store}>
          <GlobalStyles />
          <App />
        </Provider>
      </AlertProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
