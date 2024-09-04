import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';

const HouseDetailScreen = ({ route }) => {
  const { house } = route.params;
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`http://graduateapp.onrender.com/images/${house.id}`);
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [house.id]);

  const handleContact = (contactNumber) => {
    Linking.openURL(`tel:${contactNumber}`);
  };

  const openGoogleMaps = (address) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    Linking.openURL(url);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0033A0" />
        <Text style={styles.loadingText}>Loading Images...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {images.length > 0 ? (
        <ScrollView horizontal pagingEnabled>
          {images.map((image, index) => (
            <Image key={index} source={{ uri: `data:image/jpeg;base64,${image}` }} style={styles.image} />
          ))}
        </ScrollView>
      ) : (
        <Text>No images available</Text>
      )}
      <Text style={styles.title}>{house.house_name}</Text>
      <Text style={styles.description}>{house.description}</Text>
      <TouchableOpacity onPress={() => openGoogleMaps(house.location)}>
        <Text style={styles.location}>Location: {house.location}</Text>
      </TouchableOpacity>
      <Text style={styles.rent}>Rent: ${house.price_per_month}</Text>
      <Text style={styles.amenities}>Amenities: {house.amenities}</Text>
      <Text style={styles.contact}>Contact: {house.contact_person} ({house.contact_number})</Text>
      <TouchableOpacity
        style={styles.contactButton}
        onPress={() => handleContact(house.contact_number)}
      >
        <Text style={styles.contactButtonText}>Call Owner</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0033A0',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: '#0033A0',
    marginBottom: 8,
    textDecorationLine: 'underline',
  },
  rent: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0033A0',
    marginBottom: 8,
  },
  amenities: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  contact: {
    fontSize: 16,
    color: '#555',
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
});

export default HouseDetailScreen;
