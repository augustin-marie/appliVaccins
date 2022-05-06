import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Navbar';
import PageLoader from './PageLoader';

export default function App() {
  const [page, setPageName] = useState('home')
  const [url, setUrl] = useState('192.168.1.56:8080')

  function handleChange(value) {
    setPageName(value)
  }

  return (
    <View style={styles.container}>
      <PageLoader page={page}/>

      <View style={styles.navbar}>
        <Navbar page={page} onChange={handleChange}/>
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
  },

  navbar: {
    position: 'absolute',
    bottom: 20,
  }
});
