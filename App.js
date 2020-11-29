import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

// React-Navigation
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import CustomeDrawer from './src/screens/CustomeDrawer';

// Screen
import Home from './src/screens/Home';
import AddNote from './src/screens/AddNote';
import EditNote from './src/screens/EditNote';


const StackNavigator = createStackNavigator({
    Home : Home,
    AddNote: AddNote,
    EditNote: EditNote
})

const AppNavigator = createDrawerNavigator({
    Home: StackNavigator
}, {
    contentComponent: CustomeDrawer

})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return(
      <AppContainer />
    )
  }
}