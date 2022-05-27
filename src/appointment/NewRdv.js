import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App(props) {
    //Trying to get vaccine types
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    return (
        <View style={styles.container}>
            {isLoading===true ? <Text>Chargement...</Text> :data===null ? <Text>La connexion au serveur a été perdue</Text> : <Text>Form</Text>}
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
  });
  