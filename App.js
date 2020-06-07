
import React from 'react';
import { Button, Text, View, StyleSheet, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const SaveData = () => {
    console.log("Saving");
    AsyncStorage.clear();
    AsyncStorage.setItem('@store1:key', "Data for You");
    console.log("Saving Done!");
  };

  const LoadData = async () => {
    console.log('Loading');
    var keys = await AsyncStorage.getAllKeys();
    console.log(keys);
    var item = await AsyncStorage.getItem('@store1:key');
    console.log(item);
    console.log('Loading Done!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Async Storage Basics</Text>
      <Button title="Save Data" onPress={SaveData} />
      <Text> </Text>
      <Button title="Load Data" onPress={LoadData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
