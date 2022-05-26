import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


export default function App(props) {
  //Handleing form send
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [formSend, setStatus] = useState(false);

  const dataform = {
      "restant": null,
      "numLot": null,
      "datePeremtion": null,
      "tailleLot": null,
      "idCat": '',
  }

  const vaccin_types = []
  props.data.forEach(element => {
      vaccin_types.push({ label: element.nomVaccin, value: element["@id"] })
  });

  /*
{
  "restant": 20,
  "numLot": 457825,
  "datePeremtion": "2022-05-12",
  "tailleLot": 20,
  "idCat": "/api/categorie_vaccins/1"
}
*/

/*
Get all cats
remplir les champs + choisir le type (4 actions au total)
Valider puis attendre la réponse
*/
  /*
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
  */
 function placeholderFunction() {
     console.log("placeholder")
 }

  return (
      <View style={styles.container}>
          <Text>Nouveau vaccin</Text>
          <RNPickerSelect
            style={pickerStyle}
            placeholder={{
                label: 'Type du vaccin',
                value: '',
            }}
            onValueChange={(value) => dataform.idCat = value}
            items={vaccin_types}
          />

          <TextInput
            onChangeText={placeholderFunction}
            placeholder="Numéro de lot"
            keyboardType="numeric"
          />



          <TextInput
            onChangeText={placeholderFunction}
            placeholder="Taille du lot"
            keyboardType="numeric"
          />
      </View>
  )
}

const pickerStyle = {
	inputIOS: {
		color: 'black',
		paddingTop: 13,
		paddingHorizontal: 10,
		paddingBottom: 12,
	},
	inputAndroid: {
		color: 'black',
	},
	underline: { borderTopWidth: 0 },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },

  input: {
      marginTop: '40',
      padding: '20',
      width: '80%',
  },
});
