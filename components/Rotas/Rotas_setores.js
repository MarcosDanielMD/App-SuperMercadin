import * as React from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../home';
import Limpeza from '../Limpeza';
import Frutas from '../frutas';
import Derivados from '../Derivados';
import Padaria from '../Padaria';
import Acougue from '../Acougue';
import Temperos from '../Temperos';

const Stack = createStackNavigator();

export default function Rotas_setores() {
return(
<Stack.Navigator>
<Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
<Stack.Screen name="Frutas" component={Frutas} options={{ headerShown: false }}/>
<Stack.Screen name="Limpeza" component={Limpeza} options={{ headerShown: false }}/>
<Stack.Screen name="Derivados" component={Derivados} options={{ headerShown: false }}/>
<Stack.Screen name="Padaria" component={Padaria} options={{ headerShown: false }}/>
<Stack.Screen name="Acougue" component={Acougue} options={{ headerShown: false }}/>
<Stack.Screen name="Temperos" component={Temperos} options={{ headerShown: false }}/>      
</Stack.Navigator>
);
}