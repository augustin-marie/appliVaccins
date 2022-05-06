import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appointment from './Appointment';
import Stock from './Stock';
import Settings from './Settings';
import Home from './Home';

export default function App(props) {
  switch (props.page){
        case 'appointment':
            return(<Appointment/>)
        
        case 'stock':
            return(<Stock/>)
        
        case 'settings':
            return(<Settings/>)
        
        case 'home':
        default:
            return(<Home/>)
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});
