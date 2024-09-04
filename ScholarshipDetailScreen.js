import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ScholarshipDetailScreen = () => {
  const route = useRoute();
  const { item } = route.params;

 const handleApply = () => {
     if (item.apply_link) {
       Linking.openURL(item.apply_link).catch(err => console.error('Error opening link:', err));
     } else {
       alert('No application link provided');
     }
   };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>Amount: {item.amount}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.details}>Category: {item.category}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#0033A0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 18,
    color: '#D0D0D0',
    marginTop: 4,
  },
  detailsContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  applyButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#0033A0',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScholarshipDetailScreen;
