import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import detailPage from './components/detailPage';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={detailPage} />
    </Stack.Navigator>
  );
}

function HomeScreen({navigation}){
  return(
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Go to Detail" onPress={()=> navigation.navigate('Detail')}></Button>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
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

//const AppContainer = createAppContainer(AppNavigator);

export default App;