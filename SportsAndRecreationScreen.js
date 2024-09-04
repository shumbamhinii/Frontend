import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import axios

const SportsAndRecreationScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState([]);

  // Function to fetch data from the API endpoint
  const fetchData = async () => {
    try {
      const response = await axios.get('http://graduateapp.onrender.com/sports-and-recreation'); // Adjust URL if necessary
      setAllData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const lowercasedQuery = query.toLowerCase();
    setFilteredData(
      allData.filter(item =>
        item.name.toLowerCase().includes(lowercasedQuery) ||
        item.description.toLowerCase().includes(lowercasedQuery) ||
        item.schedule.toLowerCase().includes(lowercasedQuery)
      )
    );
  };

  const handleItemSelect = (item) => {
    navigation.navigate('SportDetail', { item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleItemSelect(item)}>
      <Icon name={item.icon} size={36} color="#0033A0" style={styles.itemIcon} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemSchedule}>Schedule: {item.meeting_times}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#0033A0" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for sports and recreation activities..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 8,
  },
  searchInput: {
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
  item: {
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
  itemIcon: {
    marginRight: 16,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
  },
  itemSchedule: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});

export default SportsAndRecreationScreen;
