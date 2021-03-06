import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Navbar from './Navbar';
import PageLoader from './PageLoader';

const optionHeight = StatusBar.currentHeight !== undefined ? StatusBar.currentHeight : 0;

export default function App() {
  const [page, setPageName] = useState('home')
  const [url, setUrl] = useState('192.168.1.56:8080')

  function handleChange(value) {
    setPageName(value)
  }

  function changeUrl(value) {
    setUrl(value)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.pagecontainer}>
        <PageLoader page={page} api_url={url} onUrlChange={changeUrl}/>
      </View>
      
      <View style={styles.navbar}>
        <Navbar page={page} onChange={handleChange}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: optionHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  pagecontainer: {
    flex: 1,
    width: '100%',
  },

  navbar: {
    flex: 1,
    position: 'absolute',
    bottom: 20,
    width: '80%'
  }
});
