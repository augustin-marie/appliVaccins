import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App(props) {
  //Testing API connexion
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getConnexionStatus = async () => {
    try {
     const response = await fetch('http://'+props.api_url+'/api/employers');
     const json = await response.json();
     setData("Vous êtes correctement connecté !");
    } catch (error) {
      setData("Il semble y avoir une erreur...");
    } finally {
     setLoading(false);
    }
  }

  useEffect(() => {
    getConnexionStatus();
    },
    []
  );

  return (
      <View style={styles.container}>
          <Text>Page principale</Text>
          {isLoading ? <Text>Tentative de connexion...</Text> : <Text>{data}</Text>}
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
