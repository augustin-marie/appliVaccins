import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';


export default function App(props) {
  const [page, setPage] = useState(1);

  //Trying to get Table elements
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getTableDatas = async () => {
    try {
     const response = await fetch('http://'+props.api_url+'/api/vaccins');
     const json = await response.json();
     setData(json);
     console.log("chargement des données de la table")
     console.log(json);
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

  function table (data) {
    return (
        <View style={styles.table}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Type</DataTable.Title>
                    <DataTable.Title>Lot</DataTable.Title>
                    <DataTable.Title>Date limite</DataTable.Title>
                    <DataTable.Title>Restants</DataTable.Title>
                </DataTable.Header>

                {
                    data["hydra:member"].map((element, index) => {
                        return (
                            <DataTable.Row key={index}>
                                <DataTable.Cell>{element.id_cat.nom_vaccin}</DataTable.Cell>
                                <DataTable.Cell>{element.num_lot}</DataTable.Cell>
                                <DataTable.Cell>{element.date_peremtion}</DataTable.Cell>
                                <DataTable.Cell>{element.restant}</DataTable.Cell>
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
        {isLoading===true ? <Text>Chargement...</Text> : data===null ? <Text>La connexion au serveur a été perdue</Text> : table(data)}
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
      },
    
    table: {
        flex:1,
        fontSize: 20,
        width: '100%',
    }
});
