import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import { Ionicons } from '@expo/vector-icons';

const GOOGLE_MAPS_APIKEY = 'AIzaSyB6eoLs1OYXWSyRzHq-SQ_tGQ48NYTB8kA';
const CAMPUS_COORDINATES = {
  latitude: -17.782199793130335,
  longitude: 31.05462906621346,
};

const CAMPUS_LOCATIONS = {
  library: { latitude: -17.780524318896227, longitude: 31.05358836910398, name: 'Library' },
  cafeteria: { latitude: -17.8270, longitude: 31.0530, name: 'Cafeteria' },
  administration: { latitude: -17.8280, longitude: 31.0515, name: 'Administration' },
    VeterinaryScience: {latitude: -17.7853108399233, longitude: 31.04900716014849, name: 'Veterinary Science'}
};

const MapScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCampusLocation, setSelectedCampusLocation] = useState(null);
  const [travelMode, setTravelMode] = useState('DRIVING'); // Default travel mode
  const [journeyStarted, setJourneyStarted] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);
      setOrigin(location.coords);
    })();
  }, []);

  const handleCampusSearch = () => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const location = CAMPUS_LOCATIONS[normalizedQuery];
    if (location) {
      setSelectedCampusLocation(location);
      setDestination(location);
    } else {
      Alert.alert('Campus location not found');
    }
  }

  const handleTravelModeChange = (mode) => {
    setTravelMode(mode);
  };

  const startJourney = () => {
    if (!destination) {
      Alert.alert('Error', 'Please select a destination first.');
      return;
    }
    setJourneyStarted(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.campusSearchContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Search for campus location (e.g., library)"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity onPress={handleCampusSearch} style={styles.searchButton}>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.travelModeContainer}>
        <TouchableOpacity
          onPress={() => handleTravelModeChange('DRIVING')}
          style={[
            styles.travelModeButton,
            travelMode === 'DRIVING' && styles.activeTravelModeButton,
          ]}
        >
          <Ionicons name="car" size={24} color={travelMode === 'DRIVING' ? 'white' : 'gray'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTravelModeChange('WALKING')}
          style={[
            styles.travelModeButton,
            travelMode === 'WALKING' && styles.activeTravelModeButton,
          ]}
        >
          <Ionicons name="walk" size={24} color={travelMode === 'WALKING' ? 'white' : 'gray'} />
        </TouchableOpacity>
      </View>

      {destination && !journeyStarted && (
        <TouchableOpacity onPress={startJourney} style={styles.startJourneyButton}>
          <Ionicons name="navigate" size={24} color="white" />
          <Text style={styles.buttonText}>Start Journey</Text>
        </TouchableOpacity>
      )}

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: CAMPUS_COORDINATES.latitude,
          longitude: CAMPUS_COORDINATES.longitude,
          latitudeDelta: 0.0092,
          longitudeDelta: 0.0042,
        }}
        showsUserLocation={true}
      >
        {currentLocation && (
          <Marker coordinate={currentLocation} title="Your Location" />
        )}

        {destination && (
          <>
            <Marker coordinate={destination} title="Destination" />
            {origin && journeyStarted && (
              <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="hotpink"
                mode={travelMode}
              />
            )}
          </>
        )}

        {selectedCampusLocation && (
          <Marker
            coordinate={selectedCampusLocation}
            title={selectedCampusLocation.name}
            pinColor="blue"
          />
        )}

        <Marker coordinate={CAMPUS_COORDINATES} title="University of Zimbabwe" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  campusSearchContainer: {
    position: 'absolute',
    top: 100,
    left: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    zIndex: 1,
  },
  textInput: {
    flex: 1,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  travelModeContainer: {
    position: 'absolute',
    top: 160,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    zIndex: 1,
  },
  travelModeButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  activeTravelModeButton: {
    backgroundColor: '#007BFF',
  },
  startJourneyButton: {
    position: 'absolute',
    bottom: 20,
    left: '10%',
    right: '10%',
    backgroundColor: '#007BFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    zIndex: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default MapScreen;
