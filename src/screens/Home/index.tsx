import React, { useState } from 'react';
import CheckButton from '../../components/CheckButton';
import { styles } from "./style";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';

export default function Home(){
  const [dados, setDados] = useState([]);
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput 
          style={styles.textInputStyle}
          placeholder="Adicione o texto"
          placeholderTextColor={'white'}
          onChangeText={newText => setText(newText)}
        />
        <TouchableOpacity 
          style={styles.touchableStyle}
          onPress={() => {
            if(!dados.includes(text)){
              setDados([...dados, text]);
              setErrorMessage('');
            } else {
              setErrorMessage("Texto já foi digitado");
            }
          }}
          >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <ScrollView>
        {dados.length === 0 ? (
          <View style={styles.defaultMessage}>
            <Text style={styles.text}>Nenhuma atividade na Lista</Text>
          </View>
        ) : (
          dados.map((element, index) => 
            <View style={styles.toDoItem}>
              <CheckButton/>
              <View style={styles.textArea}>
                <Text style={styles.text}>{element}</Text>
                <TouchableOpacity
                  style={styles.touchableStyle}
                  onPress={() => {
                    const newDados = [...dados];
                    newDados.splice(index, 1);
                    setDados(newDados);
                    setErrorMessage('');
                  }}>
                  <Text>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        )}
      </ScrollView>
    </View>
  );
}