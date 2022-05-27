import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { DataTable } from 'react-native-paper';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

/**
 * Step 3 : valider ou annuler
 * Step 4 : revenir a la page de départ
 */

 export default function App(props) {
    //Trying to get Table elements
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [employer, setemployer] = useState(props.employerName);
  
    const getTableDatas = async () => {
      try {
       const response = await fetch('http://'+props.api_url+'/api/employers');
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
            <DataTable.Title>Nom</DataTable.Title>
            <DataTable.Title>Preom</DataTable.Title>
            <DataTable.Title>NIR</DataTable.Title>
            <DataTable.Title>Selectioner</DataTable.Title> 
          </DataTable.Header>
  
          {
            data["hydra:member"].map((element, index) => {
              return (
                <DataTable.Row key={index}>
                  <DataTable.Cell>{element.nom}</DataTable.Cell>
                  <DataTable.Cell>{element.prenom}</DataTable.Cell>
                  <DataTable.Cell>{element.num_secu_social}</DataTable.Cell>
                  <DataTable.Cell>
                  <IconButton style={styles.btnSelect} onPress={() => {setemployer(element)}} icon={props => <Icon name="select" {...props} />} />
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
          
          <Pressable onPress={() => {props.onPageChange('main'); props.onEmployerChange(employer)}} style={styles.btnValidate}>
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
        <Text>Choix du employer :</Text>
        <Text>
            {employer==null ? 'Non sélectionner' : employer.nom + ' ' + employer.prenom}
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
  