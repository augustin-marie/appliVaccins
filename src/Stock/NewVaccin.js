import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewVaccinForm from './forms/NewVaccinForm';


export default function App(props) {
    //Trying to get vaccine types
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getVaccineTypes = async () => {
      try {
       const response = await fetch('http://'+props.api_url+'/api/categorie_vaccins');
       const json = await response.json();
       setData(json['hydra:member']);
      } catch (error) {
        setData(null);
      } finally {
       setLoading(false);
      }
    }
  
    useEffect(() => {
        getVaccineTypes();
      },
      []
    );


  return (
      <View style={styles.container}>
          {isLoading===true ? <Text>Chargement...</Text> :data===null ? <Text>La connexion au serveur a été perdue</Text> : <NewVaccinForm data={data} api_url={props.api_url}/>}
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
