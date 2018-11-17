import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {StyleProvider} from 'native-base';
import { PersistGate } from 'redux-persist/integration/react'
import Store from './Store';
import Router from './Router';
import getTheme from './assets/theme/components';
import material from './assets/theme/variables/material';

const {store, persistor} = Store();
class App extends React.Component{
  render(){
    return(
      <StyleProvider style={getTheme(material)}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      </StyleProvider>
    );
  }
}

export default App;
