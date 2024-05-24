import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { VAR_COLOR } from './src/Styles/global';
import { LoginScreen } from './src/Screens/Login';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={VAR_COLOR.background}
        style='light'
      />

      <LoginScreen/>

  
    </>
  );
}

