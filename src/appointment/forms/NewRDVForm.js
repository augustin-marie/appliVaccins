import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';


export default function App(props) {
  return (
    <View style={styles.container}>
      <View style={styles.formBlock}>
        <Text>Patient :</Text>
        <Text>{props.formData.patient==null?'Non renseigné':props.formData.patient.nom + ' ' + props.formData.patient.prenom}</Text>
        <Pressable onPress={() => props.onPageChange('patient')} style={styles.button}>
          <Text>Modifier</Text>
        </Pressable>
      </View>

      <View style={styles.formBlock}>
          <Text>Médecin: </Text>
          <Text>{props.formData.employer==null?'Non renseigné':props.formData.employer.nom + ' ' + props.formData.employer.prenom}</Text>
          <Pressable onPress={() => props.onPageChange('employer')} style={styles.button}>
            <Text>Modifier</Text>
          </Pressable>
      </View>

      <View style={styles.formBlock}>
        <Text>Numéro de lot: </Text>
        <Text>{
          props.formData.numLot==null?'Non renseigné':
          props.formData.numLot.num_lot + ' (' + props.formData.numLot.id_cat.nom_vaccin + ')'
        }</Text>
        <Pressable onPress={() => props.onPageChange('lot')} style={styles.button}>
          <Text>Modifier</Text>
        </Pressable> 
      </View>

      <View style={styles.formBlock}>
          <Text>Date du rendez-vous</Text>
          <Text>{props.formData.dateRdv==null?'Non renseigné':props.formData.dateRdv}</Text>
          <DatePicker
            style={{ width: 300 }}
            date={props.formData.dateRdv}
            mode="date"
            placeholder={
                props.formData.dateRdv==null?"JJ-MM-AAAA":props.formData.dateRdv
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
                props.onDateChange(date)
            }}
          />
      </View>

      <View style={styles.formBlock}>
        <Pressable onPress={() => {/*props.onPageChange('main'); props.onLotChange(lot)*/}} style={styles.btnValidate}>
          <Text>
            Valider
          </Text>
        </Pressable>
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
    width: '100%'
  },

  button: {
    backgroundColor: "silver",
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
    marginTop: 5,
  },

  formBlock: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },

  btnValidate: {
    backgroundColor: "#007E33",
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
  },
});
