import { Alert, StyleSheet, Text, View } from 'react-native';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from "@/components/ui/button"
import { useState } from 'react';

export default function App() {
  const URL_BASE = "https://api.carapi.dev/v1"
  const [data, setData] = useState('Nenhum dado');

  const getData = async () => {
    try {
      const response = await fetch(URL_BASE + '/listing?make=Honda&limit=1&token=carapi_92ea187da08f5c099ba63c1fd5e09ab5');
    if (!response.ok) {
      Alert.alert('Carros', 'Não retornou resposta');
      return;
    }
    const result = await response.text();
    setData(result)
    } catch (error) {
      Alert.alert('Carros', error.message);
    }
  }

  const clearData = () => {
    setData('Nenhum dado')
  }

  return (

    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
        <Text>Gravação Aula</Text>
        <Text style={styles.negrito}>DDM I - 2026</Text>
         <Text>{data}</Text>
         <Button variant="outline" size="default" onPress={getData}>
         <ButtonText className='text-black'>Solictar Dados</ButtonText>
         </Button>
        <Button variant="outline" size="default" onPress={clearData}>
          <ButtonText className='text-black'>Limpar Dados</ButtonText>
        </Button>
      </View>
    </GluestackUIProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
