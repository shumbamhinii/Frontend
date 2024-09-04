import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';

const OpportunityDetailScreen = () => {
  const route = useRoute();
  const { item } = route.params;

  const handleApply = () => {
    if (item.download_link) {
      Linking.openURL(item.download_link).catch(err => console.error('Error opening link:', err));
    } else {
      alert('No application link provided');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{item.name}</Text>
        {item.mentor && <Text style={styles.subtitle}>Mentor: {item.mentor}</Text>}
        {item.company && <Text style={styles.subtitle}>Company: {item.company}</Text>}
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.details}>Category: {item.category}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleApply}>
        <Text style={styles.buttonText}>Apply Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0033A0',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
  details: {
    fontSize: 16,
    color: '#777',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#0033A0',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OpportunityDetailScreen;
