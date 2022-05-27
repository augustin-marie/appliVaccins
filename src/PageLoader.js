import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appointment from './appointment/Appointment';
import Stock from './stock/Stock';
import Settings from './settings/Settings';
import Home from './home/Home';

export default function App(props) {
  switch (props.page){
        case 'appointment':
            return(<Appointment api_url={props.api_url}/>)
        
        case 'stock':
            return(<Stock api_url={props.api_url}/>)
        
        case 'settings':
            return(<Settings api_url={props.api_url} onUrlChange={props.onUrlChange}/>)
        
        case 'home':
        default:
            return(<Home api_url={props.api_url}/>)
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
