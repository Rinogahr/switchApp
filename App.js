
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Switch
} from 'react-native';

export default function App(){
  const [status, setStatus] = useState(false);
  const [famosos, setFamosos] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'da46a10d08mshb800047c2204f2ap1fdbe5jsn315f19fc4114',
      'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
    }
  };
  
  fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=2', options)
    .then(response => setFamosos(response.json()) )
    .then(response => console.log(response))
    .catch(err => console.error(err));

  // let famosos2 = famosos.map( ( item ) => {
  //     return item.id
  // })

  return(
    <View style={styles.container}>
      <Switch
      value={status}
      onValueChange={ (vlSelecioando) =>{ setStatus(vlSelecioando)}}
      trackColor={{ false: '#FE0000', true: '#4fff5d'}}
      thumbColor={status? '#4fff5d' : '#FE0000'}
      />

      <Text style={styles.stattusText}>
        Status: {String(status)}
        Status: {status ? "Ativo" : "Inativo"}
      </Text>

      <Text>O id é ::&gt; {famosos.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  stattusText: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


