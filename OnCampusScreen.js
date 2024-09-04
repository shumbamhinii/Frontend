import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnCampusScreen = () => {
  const navigation = useNavigation();

  const handleApply = () => {
    // Handle the application process here
    // For now, just display a message or navigate to a confirmation screen
    alert('Application submitted for On-Campus accommodation!');
    // Optionally, navigate to a different screen or perform other actions
    // navigation.navigate('SomeOtherScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>On-Campus Accommodation</Text>
      <Text style={styles.description}>
        Apply for on-campus accommodation here. Once applied, you will be contacted for further steps.
      </Text>
      <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#0033A0',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555555',
  },
  applyButton: {
    padding: 15,
    backgroundColor: '#0033A0',
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default OnCampusScreen;
