import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MenuBar from './MenuBar';
import Table from './Table';
import NewVaccine from './NewVaccin';

export default function App(props) {
  const [page, setPage] = useState('table')

  function handleChangePage(value) {
    if (value!=page){
      setPage(value);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.menucontainer}>
        <MenuBar pagehandler={handleChangePage}/>
      </View>

      <View style={styles.mainStockContainer}>
        <ScrollView>
        {
          page=="table"?<Table api_url={props.api_url}/>:<NewVaccine api_url={props.api_url}/>
        }
        </ScrollView>
      </View>
    </View>
  );
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

  mainStockContainer: {
    flex: 10,
    width: '100%',
    justifyContent: 'flex-start',
  }
});
