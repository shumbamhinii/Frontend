import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const LibraryServicesScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Library Services</Text>

      <TouchableOpacity
        style={styles.serviceContainer}
        onPress={() => navigation.navigate('DigitalResources')}
      >
        <Icon name="computer" size={36} color="#0033A0" style={styles.serviceIcon} />
        <View style={styles.serviceTextContainer}>
          <Text style={styles.serviceTitle}>Digital Resources</Text>
          <Text style={styles.serviceDescription}>Access a wide range of digital resources including e-books, journals, and databases from the library's website.</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.serviceContainer}>
        <Icon name="help-outline" size={36} color="#0033A0" style={styles.serviceIcon} />
        <View style={styles.serviceTextContainer}>
          <Text style={styles.serviceTitle}>Research Assistance</Text>
          <Text style={styles.serviceDescription}>Get help with your research projects from our librarians. Schedule a one-on-one session for in-depth assistance.</Text>
        </View>
      </View>

      <View style={styles.serviceContainer}>
       <TouchableOpacity
              style={styles.serviceContainer}
              onPress={() => navigation.navigate('StudyRoomBooking')}
            >
        <Icon name="meeting-room" size={36} color="#0033A0" style={styles.serviceIcon} />
        <View style={styles.serviceTextContainer}>
          <Text style={styles.serviceTitle}>Study Rooms</Text>
          <Text style={styles.serviceDescription}>Reserve study rooms for group work or individual study. Book a room online or at the library's front desk.</Text>
        </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#0033A0',
  },
  serviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  serviceIcon: {
    marginRight: 16,
  },
  serviceTextContainer: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default LibraryServicesScreen;
