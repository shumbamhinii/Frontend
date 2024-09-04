// DashboardScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Assignments')}>
        <Text style={styles.menuItem}>Assignments</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Groups')}>
        <Text style={styles.menuItem}>Groups</Text>
      </TouchableOpacity>
      {/* Add more dashboard options as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  menuItem: {
    padding: 15,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default DashboardScreen;
