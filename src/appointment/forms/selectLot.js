import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { DataTable } from 'react-native-paper';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App(props) {
    //Trying to get Table elements
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [lot, setlot] = useState(props.numLot);
  
    const getTableDatas = async () => {
      try {
       const response = await fetch('http://'+props.api_url+'/api/vaccins');
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
    return (
      <View style={styles.table}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>num_lot</DataTable.Title>
            <DataTable.Title>catégorie</DataTable.Title>
            <DataTable.Title>date de péremption</DataTable.Title>
            <DataTable.Title>Selectioner</DataTable.Title> 
          </DataTable.Header>
  
          {
            data["hydra:member"].map((element, index) => {
              return (
                <DataTable.Row key={index}>
                  <DataTable.Cell>{element.num_lot}</DataTable.Cell>
                  <DataTable.Cell>{element.id_cat.nom_vaccin}</DataTable.Cell>
                  <DataTable.Cell>{element.date_peremtion}</DataTable.Cell>
                  <DataTable.Cell>
                  <IconButton style={styles.btnSelect} onPress={() => {setlot(element)}} icon={props => <Icon name="select" {...props} />} />
                  </DataTable.Cell>
                </DataTable.Row>
              )
            })
          }
        </DataTable>
        
        <View style={styles.validationBar}>
          <Pressable onPress={() => {props.onPageChange('main')}} style={styles.btnCancel}>
            <Text>
              Annuler
            </Text>
          </Pressable>
          
          <Pressable onPress={() => {props.onPageChange('main'); props.onLotChange(lot)}} style={styles.btnValidate}>
            <Text>
              Valider
            </Text>
          </Pressable>
        </View>
      </View>
    )
  }
  
    return (
      <View style={styles.container}>
        <Text>Choix du lot :</Text>
        <Text>
            {lot==null ? 'Non sélectionner' : lot.num_lot + ' (' + lot.id_cat.nom_vaccin + ')'}
        </Text>
    
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
    marginBottom: 80,
  },
      
  table: {
    flex:1,
    fontSize: 20,
    width: '100%',
  },

  validationBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 15,
  },

  btnValidate: {
    backgroundColor: "#007E33",
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
  },

  btnCancel: {
    backgroundColor: "#CC0000",
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
  },

  btnSelect: {
    backgroundColor: "#0099CC",
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
  },
});
  