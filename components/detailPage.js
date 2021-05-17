import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../App';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const detailPage = ({navigation}) => {
  return (
    <ScrollView>
      <Text>This is the Detail Page</Text>
      <View>
        <Text>Detail Page</Text>
        <Button title="Back to Home <" onPress={() => navigation.navigate('Home')}></Button>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

export default detailPage;