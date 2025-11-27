import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas que vamos criar a seguir
import HomeScreen from './src/screens/HomeScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        {/* Tela Principal: Lista de Dias */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Meus Treinos' }} 
        />

        {/* Tela Secundária: Detalhes do Treino */}
        <Stack.Screen 
          name="Workout" 
          component={WorkoutScreen} 
          options={{ title: 'Detalhes do Treino' }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}