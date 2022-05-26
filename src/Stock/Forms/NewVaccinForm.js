import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';



export default function App(props) {
  //Handleing form send
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [sendCount, setCount] = useState(0); 

  //fileds
  const [taille, setTaille] = useState(null);
  const [numLot, setNumlot] = useState(null);
  const [date, setDate] = useState(null);
  const [idCat, setidCat] = useState('');


  const vaccin_types = []
  props.data.forEach(element => {
      vaccin_types.push({ label: element.nomVaccin, value: element["@id"] })
  });

  function handleFormSend() {
    if (taille==null){
      return alertForm('La taille du lot doit être définie !');
    }
    if (numLot==null){
      return alertForm('Le numéro de lot doit être défini !');
    }
    if (date==null){
      return alertForm('La date de péremption du lot doit être renseignée !');
    }
    if (idCat==''){
      return alertForm('La marque du lot doit être renseigné !');
    }

    /*API request*/
    //Transform a DD-MM-YYYY date into a AAAA-MM-DD
    let dateFragment = date.split('-')
    let dateFormat = dateFragment[2] + '-' + dateFragment[1] + '-' + dateFragment[0];

    let data = {
      "restant" : parseInt(taille),
      "numLot" : parseInt(numLot),
      "datePeremtion" : dateFormat,
      "tailleLot" : parseInt(taille),
      "idCat" : idCat
    }
    //alertForm(JSON.stringify(data), 'debug');

    sendRequest(data);
  }

  function alertForm(text, title='Erreur') {
    return (
      Alert.alert(
        title,
        text,
        [
          { text: "OK" }
        ]
      )
    )
  }


  const sendRequest = async (data) => {
    try {
     const response = await fetch('http://'+props.api_url+'/api/vaccins', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data),
     });
     const json = await response.json();
     setData("La requête est un succès");
     alertForm("Le vaccin a été ajouté, vous pouvez le voir des maintenant dans l'onglet \"stock\".", "info");
    } catch (error) {
      setData("Il semble y avoir une erreur...");
      alertForm("Une erreur s'est produite lors de l'envoi du vaccin :\n" + error);
    } finally {
     setLoading(false);
    }
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
            onValueChange={(value) => {setidCat(value), console.log(idCat)}}
            items={vaccin_types}
          />

          <TextInput
            onChangeText={(value) => value==''?setNumlot(null):setNumlot(value)}
            placeholder="Numéro de lot"
            keyboardType="numeric"
          />



          <TextInput
            onChangeText={(value) => {
              value==''?setTaille(null):setTaille(value)
            }}
          
            placeholder="Taille du lot"
            keyboardType="numeric"
          />

          <DatePicker
            style={{ width: 300 }}
            date={date}
            mode="date"
            placeholder={
              date==null?"Date de péremption":date
            }
            format="DD-MM-YYYY"
            minDate={moment().format('DD-MM-YYYY')}
            maxDate={"01-01-2100"}
            confirmBtnText="Confirmer"
            cancelBtnText="Annuler"
            customStyles={{
              dateInput: {
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'black',
              },
            }}
            onDateChange={(date) => {
              setDate(date)
            }}
          />


          <Pressable onPress={() => handleFormSend()} style={styles.buttonSend}>
            <Text>
                Enregistrer
            </Text>
          </Pressable>
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

  buttonSend: {
    backgroundColor: "#99DFB2",
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
  }
});
