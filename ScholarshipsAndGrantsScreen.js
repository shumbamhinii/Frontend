import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the Icon component
import axios from 'axios';

const ScholarshipsAndGrantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://graduateapp.onrender.com/scholarships'); // Replace with your actual API endpoint
        setAllData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error('Error fetching scholarships data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const lowercasedQuery = query.toLowerCase();
    setFilteredData(
      allData.filter(item =>
        item.name.toLowerCase().includes(lowercasedQuery) ||
        item.description.toLowerCase().includes(lowercasedQuery)
      )
    );
  };

  const handleItemSelect = (item) => {
    // Navigate to the DetailScreen with the selected item
    navigation.navigate('ScholarshipDets', { item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#333" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for scholarships and grants..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleItemSelect(item)}
          >
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemSubtitle}>Amount: {item.amount}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => navigation.navigate('ScholarshipDets', { item })}
            >
              <Text style={styles.applyButtonText}>View Details</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
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
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  searchIcon: {
    marginRight: 12,
  },
  item: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  itemSubtitle: {
    fontSize: 16,
    color: '#555',
    marginVertical: 4,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  applyButton: {
    marginTop: 10,
    paddingVertical: 8,
    backgroundColor: '#0033A0',
    borderRadius: 5,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ScholarshipsAndGrantsScreen;
