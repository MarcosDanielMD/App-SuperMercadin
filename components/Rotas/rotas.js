import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Image} from 'react-native';

import Rotas_setores from './Rotas_setores';
import Sobre from '../sobre';
import Promocoes from '../promocoes';
const Tab = createBottomTabNavigator();

const homeIcon = require('../../assets/Icones/home.png');
const promoIcon = require('../../assets/Icones/promocoes.png');
const sobreIcon = require('../../assets/Icones/sobre.png');

export function Rotas() {
  return(
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle:{
          borderTopWidth: 0,
          width: '80%', 
          borderRadius: 25,
          marginBottom: 10, 
          position: 'absolute', 
          height: 50,
          marginLeft: '10%',
        }
      }}          
    >
      <Tab.Screen 
        name="Rotas_setores" 
        component={Rotas_setores} 
        options={{
          tabBarIcon: () => (
            <Image source={homeIcon} style={{position: 'absolute', top:'10%', width: 40, height: 40}} />
          ),
        }}
      />
      <Tab.Screen 
        name="Promocoes" 
        component={Promocoes} 
        options={{
          tabBarIcon: () => (
            <Image source={promoIcon} style={{ position: 'absolute', top:'10%', width: 40, height: 40}} />
          ),
        }}
      />
      <Tab.Screen 
        name="Sobre" 
        component={Sobre} 
        options={{
          tabBarIcon: () => (
            <Image source={sobreIcon} style={{  position: 'absolute', top:'10%', width: 40, height: 40}} />
          ),
        }}
      />
     
    </Tab.Navigator>
  )
}
