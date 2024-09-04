import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DiscussionForumsScreen = () => {
  const navigation = useNavigation();
  const [forums, setForums] = useState([]);
  const [filteredForums, setFilteredForums] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the discussion forums data from the API
    axios.get('http://graduateapp.onrender.com/discussion-forums')
      .then((response) => {
        setForums(response.data);
        setFilteredForums(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching discussion forums:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter forums based on search query
    const filtered = forums.filter(forum =>
      forum.forum_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredForums(filtered);
  }, [searchQuery, forums]);

  const handlePress = (forum) => {
    navigation.navigate('ForumDetails', { forum });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0033A0" />
        <Text style={styles.loadingText}>Loading Forums...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      
      <Searchbar
        placeholder="Search forums..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
        icon={() => <Icon name="search" size={24} color="#0033A0" />}
      />
      {filteredForums.length > 0 ? (
        filteredForums.map(forum => (
          <TouchableOpacity
            key={forum.id}
            style={styles.forumContainer}
            onPress={() => handlePress(forum)}
          >
            <Text style={styles.forumName} numberOfLines={1}>{forum.forum_name}</Text>
            <Text style={styles.forumDescription} numberOfLines={2}>{forum.description}</Text>
            <Text style={styles.forumCategory} numberOfLines={1}>{forum.category}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.noForumsText}>No forums found</Text>
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
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  forumContainer: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: 150, // Fixed height for uniformity
    justifyContent: 'center', // Center align content
  },
  forumName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0033A0',
    marginBottom: 4,
  },
  forumDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  forumCategory: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
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
  noForumsText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default DiscussionForumsScreen;
