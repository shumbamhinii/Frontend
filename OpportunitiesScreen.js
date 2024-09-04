import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the Icon component
import axios from 'axios'; // Import axios for making HTTP requests

const OpportunitiesScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default to 'All'
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch opportunities from the server when the component mounts
    const fetchOpportunities = async () => {
      try {
        const response = await axios.get('http://graduateapp.onrender.com/opportunities');
        setAllData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error('Error fetching opportunities:', error);
      }
    };

    fetchOpportunities();
  }, []);

  useEffect(() => {
    // Filter data whenever search query or selected category changes
    const lowercasedQuery = searchQuery.toLowerCase();
    setFilteredData(
      allData.filter(item =>
        (selectedCategory === 'All' || item.category === selectedCategory) &&
        (item.name.toLowerCase().includes(lowercasedQuery) ||
        (item.mentor && item.mentor.toLowerCase().includes(lowercasedQuery)) ||
        (item.company && item.company.toLowerCase().includes(lowercasedQuery)))
      )
    );
  }, [searchQuery, selectedCategory, allData]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleItemSelect = (item) => {
    navigation.navigate('OpportunityDets', { item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#0033A0" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for opportunities..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, selectedCategory === 'All' && styles.selectedButton]}
          onPress={() => setSelectedCategory('All')}
        >
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedCategory === 'Mentorships' && styles.selectedButton]}
          onPress={() => setSelectedCategory('Mentorships')}
        >
          <Icon name="people" size={24} color="#FFF" />
          <Text style={styles.buttonText}>Mentorships</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedCategory === 'Internships' && styles.selectedButton]}
          onPress={() => setSelectedCategory('Internships')}
        >
          <Icon name="work" size={24} color="#FFF" />
          <Text style={styles.buttonText}>Internships</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleItemSelect(item)}
          >
            <Text style={styles.itemTitle}>{item.name}</Text>
            {item.mentor && <Text style={styles.itemSubtitle}>Mentor: {item.mentor}</Text>}
            {item.company && <Text style={styles.itemSubtitle}>Company: {item.company}</Text>}
            <Text style={styles.itemDescription}>{item.description}</Text>
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
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#d06009',
    borderRadius: 5,
    marginHorizontal: 4,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  selectedButton: {
    backgroundColor: '#0033A0',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 8,
  },
  item: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  itemSubtitle: {
    fontSize: 16,
    color: '#555',
    marginVertical: 4,
  },
  itemDescription: {
    fontSize: 14,
    color: '#000',
  },
});

export default OpportunitiesScreen;
