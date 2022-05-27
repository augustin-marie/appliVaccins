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
        <Text>{props.formData.patient[0]==null?'Non renseigné':props.formData.patient[0]}</Text>
        <Pressable onPress={() => props.onPageChange('patient')} style={styles.button}>
          <Text>Modifier</Text>
        </Pressable>
      </View>

      <View style={styles.formBlock}>
          <Text>Médecin: </Text>
          <Text>{props.formData.employer[0]==null?'Non renseigné':props.formData.employer[0]}</Text>
          <Pressable onPress={() => props.onPageChange('employer')} style={styles.button}>
            <Text>Modifier</Text>
          </Pressable>
      </View>

      <View style={styles.formBlock}>
        <Text>Numéro de lot: </Text>
        <Text>{props.formData.numLot[0]==null?'Non renseigné':props.formData.numLot[0]}</Text>
        <Pressable onPress={() => props.onPageChange('lot')} style={styles.button}>
          <Text>Modifier</Text>
        </Pressable> 
      </View>

      <View style={styles.formBlock}>
          <Text>Date du rendez-vous</Text>
          <Text>{props.formData.dateRdv[0]==null?'Non renseigné':props.formData.dateRdv[0]}</Text>
          <DatePicker
            style={{ width: 300 }}
            date={props.formData.dateRdv[0]}
            mode="date"
            placeholder={
                props.formData.dateRdv[0]==null?"JJ-MM-AAAA":props.formData.dateRdv[0]
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
                props.formData.dateRdv[1](date)
            }}
          />
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
  },

  formBlock: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 15,
  }
});
