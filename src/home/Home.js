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
      <View style={{flex: 1, width: '100%'}}>
        <Text style={styles.textMenu}>
          Page principale
        </Text>
      </View>

      <View style={styles.mainHomeContainer}>
        {isLoading ? <Text>Tentative de connexion...</Text> : <Text>{data}</Text>}
      </View>
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

  textMenu: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#eee',
    padding: 15,
    width: "100%",
  },

  mainHomeContainer: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 80,
  }
});
