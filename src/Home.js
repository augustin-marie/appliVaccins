import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App(props) {
  return (
      <View>
          <Text>Page principale</Text>
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
});
