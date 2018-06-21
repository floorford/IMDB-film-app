import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import List from './containers/List';
import Detail from './screens/Detail';

import { StatusBar } from 'react-native';

// Change the text colour to white (iOS only)
StatusBar.setBarStyle('light-content');

const RootNavigator = createStackNavigator({
  List: List,
  Detail: Detail
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#604c82'
    },
    headerTintColor: '#ffffff'
  }
});

export default RootNavigator;
