import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuBar from './MenuBar';
import Table from './Table';

export default function App(props) {
  return (
    <View style={styles.container}>
      <View style={styles.menucontainer}>
        <MenuBar/>
      </View>
      <View style={styles.tablecontainer}>
        <Table api_url={props.api_url}/>
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

  tablecontainer: {
    flex: 10,
    width: '100%',
    justifyContent: 'flex-start',
  }
});
