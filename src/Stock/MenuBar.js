import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
    return (
      <View style={styles.menubar}>
          <Pressable onPress={() => {console.log("placeholder, button appuyé")}} style={styles.buttonStyle}>
            <Text>
                Nouvel arrivage
            </Text>
          </Pressable>
      </View>
    );
  }
  
const styles = StyleSheet.create({
    menubar: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: '#eee',
      padding: 15,
    },

    buttonStyle: {
      backgroundColor: "#99DFB2",
      color: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 4,
      elevation: 3,
    },
});