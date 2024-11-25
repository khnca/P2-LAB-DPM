import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nadia Khalisah Khansa</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24, 
    color: 'blue', 
    fontWeight: 'bold', 
    marginBottom: 50, 
  },
  boxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '80%', 
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#008B8B', 
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#4682B4', 
  },
});
