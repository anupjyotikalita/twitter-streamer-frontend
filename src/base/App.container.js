import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from '../utils/redux/store';

// This Component is supposed to render only once. Donot add any side-effects.
function AppContainer() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default AppContainer;
