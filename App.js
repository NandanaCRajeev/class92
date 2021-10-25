import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import LocationScreen from './screens/LocationScreen';

export default class App extends React.Component {
  render(){
  return (
    
    <View>
      <View>
      <AppContainer/>
      </View>
     
    
      
    </View>
  );
}
}
var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  LocationScreen:LocationScreen,
})
const AppContainer=createAppContainer(AppNavigator)