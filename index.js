import 'react-native-gesture-handler';
import  App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

AppRegistry.registerComponent(appName, () => App);