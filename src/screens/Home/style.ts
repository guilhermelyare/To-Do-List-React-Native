import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#026773',
    },
    inputArea: {
      marginStart: 15,
      marginTop: 30,
      flexDirection: 'row',
      alignItems: 'center'
    },
    errorMessage:{
      marginStart: 15,
      marginTop: 5,
      color: 'red'
    },
    buttonStyle: {
      height: 50,
      width: 50 ,
      borderWidth: 1,
      marginStart: 20,
    },
    touchableStyle: {
      height: 45,
      width: 45 ,
      backgroundColor: '#3CA6A6',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
    },
    textArea: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 229
    },
    textInputStyle: {
      height: 50,
      width: 250,
      borderWidth: 1,
      borderRadius: 15,
      paddingStart: 20,
      marginEnd: 15,
      color: 'white',
      borderColor: 'white'
    },
    text: {
      fontSize: 20,
      color: 'white'
    },
    toDoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#012E40',
      width: 300,
      marginStart: 15,
      marginTop: 10,
      borderRadius: 10
    },
    defaultMessage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
  });