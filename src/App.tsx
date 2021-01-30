import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Main from './Main';

function App(): React.ReactElement {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
