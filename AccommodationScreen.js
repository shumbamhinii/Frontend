import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const AccommodationScreen = () => {
const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);


  const handleSelection = (option) => {
    setSelectedOption(option);
    if (option === 'onCampus') {
      navigation.navigate('OnCampus'); // Navigate to OnCampusScreen
    } else if (option === 'offCampus') {
      navigation.navigate('OffCampus'); // Navigate to OffCampusScreen
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Choose Accommodation Type</Text>

      <TouchableOpacity
        style={[styles.optionContainer, selectedOption === 'onCampus' && styles.selectedOption]}
        onPress={() => handleSelection('onCampus')}
      >
        <View style={styles.iconContainer}>
          <Icon name="location-city" size={36} color="#FFFFFF" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionTitle}>On-Campus</Text>
          <Text style={styles.optionDescription}>Select if you prefer to stay on campus.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.optionContainer, selectedOption === 'offCampus' && styles.selectedOption]}
        onPress={() => handleSelection('offCampus')}
      >
        <View style={styles.iconContainer}>
          <Icon name="home" size={36} color="#FFFFFF" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionTitle}>Off-Campus</Text>
          <Text style={styles.optionDescription}>Select if you prefer to stay off campus.</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#0033A0',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 15,
    backgroundColor: '#0033A0',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#0033A0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  optionDescription: {
    fontSize: 15,
    color: '#E0E0E0',
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: '#0033A0',
  },
});

export default AccommodationScreen;
