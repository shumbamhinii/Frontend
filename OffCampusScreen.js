import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, Linking } from 'react-native';
import axios from 'axios';

const OffCampusScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://graduateapp.onrender.com/offcampus')
      .then(response => {

        setHouses(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching off-campus housing data:', error);
        setLoading(false);
      });
  }, []);

  const filteredHouses = houses.filter(house =>
    house.house_name &&
    house.house_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectHouse = (house) => {
    navigation.navigate('HouseDetail', { house });
  };

  const handleContact = (contactNumber) => {
    Linking.openURL(`tel:${contactNumber}`);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0033A0" />
        <Text style={styles.loadingText}>Loading Houses...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Off-Campus Housing</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search for houses..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {filteredHouses.length > 0 ? (
        filteredHouses.map(house => (
          <TouchableOpacity
            key={house.id}
            style={styles.houseContainer}
            onPress={() => handleSelectHouse(house)}
          >
            <Text style={styles.houseName}>{house.house_name}</Text>
            <Text style={styles.houseLocation}>{house.location}</Text>
            <Text style={styles.houseRent}>${house.price_per_month}</Text>
            <Text style={styles.houseDescription}>{house.description}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noHousesText}>No houses found</Text>
      )}
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
  searchBar: {
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    borderColor: '#0033A0',
    borderWidth: 1,
  },
  houseContainer: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  houseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  houseLocation: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  houseRent: {
    fontSize: 16,
    color: '#0033A0',
    fontWeight: '600',
    marginBottom: 4,
  },
  houseDescription: {
    fontSize: 14,
    color: '#555',
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: 20,
  },
  detailsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0033A0',
    marginBottom: 8,
  },
  detailsDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  detailsRent: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0033A0',
    marginBottom: 4,
  },
  detailsLocation: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  detailsContact: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0033A0',
    marginBottom: 12,
  },
  contactButton: {
    padding: 12,
    backgroundColor: '#0033A0',
    borderRadius: 8,
    alignItems: 'center',
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#0033A0',
  },
  noHousesText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default OffCampusScreen;
