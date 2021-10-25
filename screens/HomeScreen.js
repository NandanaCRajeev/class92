import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <AppHeader/>
            </View>
        )
    }
}