import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EventDetailScreen = () => {
  const route = useRoute();
  const { item } = route.params;

  // Convert ISO date string to a readable format
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString(); // Format date according to user's locale
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.detailSection}>
        <Icon name="schedule" size={24} color="#0033A0" style={styles.icon} />
        <View style={styles.detailTextContainer}>
          <Text style={styles.detailTitle}>Date:</Text>
          <Text style={styles.detailText}>{formatDate(item.date)}</Text>
        </View>
      </View>
      <View style={styles.detailSection}>
        <Icon name="location-on" size={24} color="#0033A0" style={styles.icon} />
        <View style={styles.detailTextContainer}>
          <Text style={styles.detailTitle}>Location:</Text>
          <Text style={styles.detailText}>{item.location || '[Insert location details here]'}</Text>
        </View>
      </View>
      <View style={styles.detailSection}>
        <Icon name="contacts" size={24} color="#0033A0" style={styles.icon} />
        <View style={styles.detailTextContainer}>
          <Text style={styles.detailTitle}>Contact:</Text>
          <Text style={styles.detailText}>{item.contact || '[Insert contact details here]'}</Text>
        </View>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0033A0',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
  detailSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon: {
    marginRight: 16,
  },
  detailTextContainer: {
    flex: 1,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0033A0',
    marginBottom: 4,
  },
  detailText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
});

export default EventDetailScreen;
