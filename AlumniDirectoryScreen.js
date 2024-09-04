import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const AlumniDirectoryScreen = () => {
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://graduateapp.onrender.com/alumni')
      .then((response) => {
        setAlumni(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching alumni data:', error);
        setLoading(false);
      });
  }, []);

  const handlePress = (alumni) => {
    navigation.navigate('AlumniProfile', { alumni });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0033A0" />
        <Text style={styles.loadingText}>Loading Alumni...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={alumni}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.alumniContainer} onPress={() => handlePress(item)}>
          <Image source={{ uri: item.image_url }} style={styles.alumniImage} />
          <View style={styles.alumniDetails}>
            <Text style={styles.alumniName}>{item.name}</Text>
            <Text style={styles.alumniProfession}>{item.profession}</Text>
            <Text style={styles.alumniAchievements}>{item.achievements}</Text>
          </View>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
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
  alumniContainer: {
    flexDirection: 'row',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  alumniImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  alumniDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  alumniName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0033A0',
    marginBottom: 4,
  },
  alumniProfession: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  alumniAchievements: {
    fontSize: 14,
    color: '#777',
  },
  listContent: {
    paddingBottom: 16,
  },
});

export default AlumniDirectoryScreen;
