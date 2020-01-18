import React, { Component } from 'react';

import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './components/HomeScreen';
import PetScreen from './components/PetScreen';

const AppNavigator = createStackNavigator(
  {
    Home:  HomeScreen,
    Pet: PetScreen
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
