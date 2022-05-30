import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App(props) {
    return (
      <View style={styles.menubar}>
        <Pressable onPress={() => {props.pagehandler('table')}} style={styles.buttonNew}>
          <Text>
            Rendez-vous
          </Text>
        </Pressable>

        <Pressable onPress={() => {props.pagehandler('new')}} style={styles.buttonTable}>
          <Text>
              Nouveau rendez-vous
          </Text>
        </Pressable>
      </View>
    );
  }
  
const styles = StyleSheet.create({
    menubar: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: '#eee',
      padding: 15,
    },

    buttonTable: {
      backgroundColor: "#99DFB2",
      color: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 3,
      paddingHorizontal: 16,
      borderRadius: 4,
      elevation: 3,
    },

    buttonNew: {
      backgroundColor: "#0275d8",
      color: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 3,
      paddingHorizontal: 16,
      borderRadius: 4,
      elevation: 3,
    },
});