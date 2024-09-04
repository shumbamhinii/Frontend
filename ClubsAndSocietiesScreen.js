import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const ClubsAndSocietiesScreen = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredClubs, setFilteredClubs] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await axios.get('https://graduateapp.onrender.com/clubs-and-societies'); // Update with your API URL
        setClubs(response.data);
        setFilteredClubs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching clubs and societies:', error);
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const lowercasedQuery = query.toLowerCase();
    setFilteredClubs(
      clubs.filter(club =>
        club.name.toLowerCase().includes(lowercasedQuery) ||
        club.description.toLowerCase().includes(lowercasedQuery) ||
        club.meeting_times.toLowerCase().includes(lowercasedQuery)
      )
    );
  };

  const handlePress = (club) => {
    navigation.navigate('ClubDetail', { item: club });
  };

  const renderClubItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
      <Icon name={item.icon} size={36} color="#0033A0" style={styles.cardIcon} />
      <View style={styles.textContainer}>
        <Text style={styles.clubName}>{item.name}</Text>
        <Text style={styles.clubDescription}>{item.description}</Text>
        <Text style={styles.itemSchedule}>Schedule: {item.meeting_times}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0033A0" />
        <Text style={styles.loadingText}>Loading Clubs and Societies...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#0033A0" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search Clubs"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredClubs}
        renderItem={renderClubItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 8,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
  },
  searchIcon: {
    marginRight: 8,
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
  card: {
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
  cardIcon: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  clubName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0033A0',
  },
  clubDescription: {
    fontSize: 14,
    color: '#555',
  },
  itemSchedule: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});

export default ClubsAndSocietiesScreen;
