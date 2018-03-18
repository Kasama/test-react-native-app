import { Provider } from 'react-redux';
import React from 'react';

import store from './app/store';

import Application from './app/components/Application';

const App = () => {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
}

export default App;
