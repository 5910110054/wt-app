import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class Forcast extends React.Component{
    render(){
        return(
            <View >
                    <Text style={styles.main}>{this.props.main}</Text>
                    <Text style={styles.description}>{this.props.description}</Text>
                    <Text style={styles.temp}>{this.props.temp}°C</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: { 
      color: '#990000',
      fontSize : 35,
    },
    description: { 
        color: '#990000',
        fontSize : 35,
      },
      temp: { 
        color: '#990000',
        fontSize : 50,
      },
  });