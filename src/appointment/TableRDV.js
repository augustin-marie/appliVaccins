import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function App(props) {
  //Trying to get Table elements
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getTableDatas = async () => {
    try {
     const response = await fetch('http://'+props.api_url+'/api/rendez_vouses');
     const json = await response.json();
     setData(json);
    } catch (error) {
      setData(null);
    } finally {
     setLoading(false);
    }
  }

  useEffect(() => {
    getTableDatas();
    },
    []
  );

function table(data) {
  console.log(data["hydra:member"])
  return (
    <View style={styles.table}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Medecin</DataTable.Title>
          <DataTable.Title>Prenom</DataTable.Title>
          <DataTable.Title>Nom</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
        </DataTable.Header>

        {
          data["hydra:member"].map((element, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell>{element.id_employer.nom} {element.id_employer.prenom}</DataTable.Cell>
                <DataTable.Cell>{element.id_patient.prenom}</DataTable.Cell>
                <DataTable.Cell>{element.id_patient.nom}</DataTable.Cell>
                <DataTable.Cell>{element.Annule==true?"annulé":"maintenu"}</DataTable.Cell>
              </DataTable.Row>
            )
          })
        }
      </DataTable>
    </View>
  )
}

  return (
    <View style={styles.container}>
      <Text>
        {isLoading===true ? <Text>Chargement...</Text> : data===null ? <Text>La connexion au serveur a été perdue</Text> : table(data)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: 80,
      },
    
      table: {
        flex:1,
        fontSize: 20,
        width: '100%',
    }
});
