import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ClubDetailScreen = () => {
  const route = useRoute();
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.detailSection}>
        <Icon name="how-to-reg" size={24} color="#0033A0" style={styles.icon} />
        <View style={styles.detailTextContainer}>
          <Text style={styles.detailTitle}>How to Join:</Text>
          <Text style={styles.detailText}>{item.how_to_join || 'No details available'}</Text>
        </View>
      </View>
      <View style={styles.detailSection}>
        <Icon name="schedule" size={24} color="#0033A0" style={styles.icon} />
        <View style={styles.detailTextContainer}>
          <Text style={styles.detailTitle}>Meeting Times:</Text>
          <Text style={styles.detailText}>{item.meeting_times || 'No details available'}</Text>
        </View>
      </View>
      <View style={styles.detailSection}>
        <Icon name="contacts" size={24} color="#0033A0" style={styles.icon} />
        <View style={styles.detailTextContainer}>
          <Text style={styles.detailTitle}>Contact:</Text>
          <Text style={styles.detailText}>{item.contact || 'No contact details available'}</Text>
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

export default ClubDetailScreen;
