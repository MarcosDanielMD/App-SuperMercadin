import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/assets/logo.png';
import banner from '../assets/assets/ff.jpg';
import localIcon from '../assets/Icones/locazacao.png';

const setores = [
  {
    nome: 'Frutas',
    foto: require('../assets/assets/uva.png'),
    pagina:'Frutas'
  },

  {
    nome: 'Limpeza',
    foto: require('../assets/assets/produtos-de-limpeza.png'),
    pagina: 'Limpeza'
  },
  {
    nome: 'Derivados',
    foto: require('../assets/assets/produtos-derivados-leite-de-cabrajpg.jpeg'),
    pagina: 'Derivados'

  },
  {
    nome: 'Padaria',
    foto: require('../assets/assets/pao.png'),
    pagina: 'Padaria'

  },
  {
    nome: 'Açougue',
    foto: require('../assets/assets/carne.png'),
    pagina: 'Acougue'

  },
  {
    nome: 'Temperos',
    foto: require('../assets/assets/temperos.jpeg'),
    pagina: 'Temperos'

  },
];

const MyComponent = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(item.pagina);
  };

  return (
    <TouchableOpacity style={{ width: '100%' }} onPress={handlePress}>
      <Image
        source={item.foto}
        style={{
          borderRadius: 30,
          width: '90%',
          height: '75%',
          margin: 8,
        }}
      />
      <Text style={styles.txtSetores}>{item.nome}</Text>
    </TouchableOpacity>
  );
};
export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.location}>
            <Image style={styles.imglocal} source={localIcon} />
            Cecap, Guarulhos
          </Text>
        </View>

        <Image
          style={styles.banner}
          source={require('../assets/assets/ff.jpg')}
        />

        <View style={styles.pesquisa}>
          <Image
            style={{ width: 30, height: 30, alignSelf: 'flex-end', margin: 5 }}
            source={require('../assets/Icones/pesquisa.png')}
          />
        </View>

        <LinearGradient
          colors={['#3bb852', '#4933D2']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          style={styles.bonus}>
          <Text style={styles.txtBonus}>Seu bonûs esse mês é:</Text>
          <Text style={styles.txtBonus}>R$ 0,00</Text>
        </LinearGradient>

        <View style={styles.desconto}>
          <Image
            style={{ width: 40, height: 40, margin: 10 }}
            source={require('../assets/Icones/desconto.png')}
          />
          <Text style={{ fontSize: 20, paddingTop: 12, fontWeight: 'bold' }}>
            Desconto de 20% hoje
          </Text>
        </View>

        <Text style={{ marginTop: 10, fontSize: 20 }}>Serviços</Text>

        <View style={styles.botoes}>
          <TouchableOpacity>
            <Image
              style={{ width: 50, height: 50, margin: 10 }}
              source={require('../assets/Icones/comprar.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 50, height: 50, margin: 10 }}
              source={require('../assets/Icones/carteiras.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{ width: 50, height: 50, margin: 10 }}
              source={require('../assets/Icones/usuario.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={{ marginTop: 10, fontSize: 20 }}>Setores</Text>

        <View style={styles.setores}>
        
         <FlatList
            data={setores}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.containerSetores}>
                <MyComponent item={item} />
              </View>
            )}
          />

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E2E0',
  },
  containerSetores: {
    flex: 0.5,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 20,
    textAlign: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  logoContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 40,
    height: 40,
  },
  banner: {
    alignItems: 'center',
    width: 360,
    height: 200,
    borderRadius: 20,
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    margin: 10,
  },
  imglocal: {
    width: 20,
    height: 20,
  },
  pesquisa: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: '#4933D2',
    borderRadius: 20,
    marginTop: 30,
  },
  bonus: {
    marginTop: 30,
    width: '100%',
    height: 150,
    backgroundColor: 'steelblue',
    borderRadius: 20,
  },
  txtBonus: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    padding: 15
  },
  desconto: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#4933D2',
    borderRadius: 20,
    marginTop: 30,
    flexDirection: 'row',
  },
  botoes: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  setores: {
    flexDirection: 'row',
    marginTop: 10,
  },
  
  txtSetores: {
    textAlign: 'center',
    fontSize: 20,
  },
});
