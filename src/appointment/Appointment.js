import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import TableRDV from './TableRDV';
import NewRDV from './NewRdv';
import MenuBarRDV from './MenuBarAppointment';

export default function App(props) {
  const [page, setPage] = useState('table');
  
  function handleChangePage(value) {
    if (value!=page) {
      setPage(value);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.menucontainer}>
        <MenuBarRDV pagehandler={handleChangePage}/>
      </View>

      <View style={styles.mainAppointmentContainer}>
        <ScrollView>
          {
            page=="table"?<TableRDV api_url={props.api_url}/>:<NewRDV api_url={props.api_url}/>
          }
        </ScrollView>
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
    flexDirection: 'column',
  },

  menucontainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
  },

  mainAppointmentContainer: {
    flex: 10,
    width: '100%',
    justifyContent: 'flex-start',
  },
});