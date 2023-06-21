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

import { useNavigation } from '@react-navigation/native';
import logo from '../assets/assets/logo.png';
import localIcon from '../assets/Icones/locazacao.png';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/Icones/SUPERMERCADIN.png')}
            style={styles.logo}
          />
        </View>

        <Text style={styles.titulo}>Sobre Nós</Text>
        <Text style={styles.conteudo}>
          O SuperMercadin é um aplicativo que ajuda os clientes a comprar no
          mercado. Nele, você pode ver os produtos disponíveis, seus preços e as
          promoções do mercado. Embora não seja possível comprar pelo
          aplicativo, ele facilita o planejamento das compras e permite que você
          fique por dentro das melhores ofertas. É uma ferramenta conveniente e
          prática para os clientes.
        </Text>
        <View style={styles.imagem}>
          <Image
            source={require('../assets/assets/nois.png')}
            style={{ width: 250, height: 250, borderRadius: 20 }}
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
  logoContainer: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    marginLeft: 10,
    width: 200,
    height: 25,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
    textAlign: 'center',
  },
  conteudo: {
    textAlign: 'justify',
    fontSize: 20,
    margin: 20,
  
  },
  imagem: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
