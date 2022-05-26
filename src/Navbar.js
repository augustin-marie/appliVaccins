import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App(props) {
  return (
    <View style={styles.navbar}>
        <IconButton style={styles.button} onPress={() => {props.onChange("home")}} icon={props => <Icon name="home" {...props} />} />
        <IconButton style={styles.button} onPress={() => {props.onChange("appointment")}} icon={props => <Icon name="notebook" {...props} />} />
        <IconButton style={styles.button} onPress={() => {props.onChange("stock")}} icon={props => <Icon name="hospital" {...props} />} />
        <IconButton style={styles.button} onPress={() => {props.onChange("settings")}} icon={props => <Icon name="cogs" {...props} />} />
    </View>
  );
}

const styles = StyleSheet.create({
    navbar: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: '#eee',
      borderRadius: 40,
  },
});
