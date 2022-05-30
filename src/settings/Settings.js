import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App(props) {
  return (
    <View style={styles.container}>
      <View style={{flex: 0, width: '100%'}}>
        <Text style={styles.textMenu}>
          Paramètres de l'application
        </Text>
      </View>

      <View style={styles.parametterContainer}>
        <Text>Url ou IP du serveur :</Text>
        <Text>{'('+props.api_url+')'}</Text>
        <TextInput
            //can check with a regex if the api url makes sense
            onChangeText={(value) => props.onUrlChange(value)}
            placeholder='XXX.XXX.XXX.XXX:XXXX'
          />
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
    textAlign: 'center',
    backgroundColor: '#eee',
    padding: 15,
    width: "100%",
  },

  parametterContainer: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 80,
  }
});