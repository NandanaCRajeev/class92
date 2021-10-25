import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

  class AppHeader extends React.Component{
    render(){
        return(
                <View style={styles.textcontainer}>
                    <Text style={styles.text}>Alert App</Text>
                </View>
        )
        
    }
}

const styles = StyleSheet.create({
        textcontainer:{
            backgroundColor:"blue",

        },
        text:{
            backgroundColor:"black",
            padding:20,
            fontSize:22,
            fontWeight:"bold",
            textAlign:"center",
        }
})
export default AppHeader;