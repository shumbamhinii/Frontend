import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CounselingServiceDetailsScreen = ({ route }) => {
  const { service } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{service.title}</Text>
      <Text style={styles.description}>{service.description}</Text>
      <Text style={styles.details}>{service.details}</Text>
      <Text style={styles.contactTitle}>Contact Details:</Text>
      <Text style={styles.contactInfo}>{service.contact_info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0033A0',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 16,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0033A0',
    marginBottom: 8,
  },
  contactInfo: {
    fontSize: 16,
    color: '#000000',
  },
});

export default CounselingServiceDetailsScreen;
