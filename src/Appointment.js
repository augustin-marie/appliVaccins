import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, width: '100%'}}>
        <Text style={styles.textMenu}>
          Rendez vous (menu probablement)
        </Text>
      </View>

      <View style={styles.mainAppointmentContainer}>
        <Text>Page appointment</Text>
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
  },

  textMenu: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#eee',
    padding: 15,
    width: "100%",
  },

  mainAppointmentContainer: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 80,
  }
});