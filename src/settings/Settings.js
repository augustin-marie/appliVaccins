import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App(props) {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, width: '100%'}}>
        <Text style={styles.textMenu}>
          Paramètres de l'application
        </Text>
      </View>

      <View style={styles.parametterContainer}>
        <Text>param 1</Text>
        <Text>param 2</Text>
        <Text>param 3</Text>
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

  textMenu: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#eee',
    padding: 15,
    width: "100%",
  },

  parametterContainer: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 80,
  }
});