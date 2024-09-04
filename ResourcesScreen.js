import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, Text, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function ResourcesScreen() {
  const navigation = useNavigation();

  // Update these paths based on where your images are stored
  const libraryImage = require('.//assets//LIBS.png');
  const mapImage = require('.//assets//MAP.png');
  const accommodationImage = require('.//assets//ACCO.png');
  const forumsImage = require('.//assets//FORUMS.png');
  const alumniImage = require('.//assets//ALU.png');

  return (
    <ScrollView style={styles.container}>
      <TouchableRipple onPress={() => navigation.navigate('Library')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
          <Image source={libraryImage} style={styles.image} resizeMode="cover" />
          <Card.Title title="Library Services" />
          <Card.Content>
            <Text style={styles.content}>Details about fees payment...</Text>
          </Card.Content>
        </Card>
      </TouchableRipple>

      <TouchableRipple onPress={() => navigation.navigate('Maps')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
          <Image source={mapImage} style={styles.image} resizeMode="cover" />
          <Card.Title title="Campus Map" />
          <Card.Content>
            <Text style={styles.content}>Details about financial statements...</Text>
          </Card.Content>
        </Card>
      </TouchableRipple>

      <TouchableRipple onPress={() => navigation.navigate('Accommodation')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
          <Image source={accommodationImage} style={styles.image} resizeMode="cover" />
          <Card.Title title="Accommodation" />
          <Card.Content>
            <Text style={styles.content}>Details about university policies...</Text>
          </Card.Content>
        </Card>
      </TouchableRipple>

      <TouchableRipple onPress={() => navigation.navigate('Forums')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
          <Image source={forumsImage} style={styles.image} resizeMode="cover" />
          <Card.Title title="Discussion Forums" />
          <Card.Content>
            <Text style={styles.content}>Details about quotations...</Text>
          </Card.Content>
        </Card>
      </TouchableRipple>

      <TouchableRipple onPress={() => navigation.navigate('Alumni')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
          <Image source={alumniImage} style={styles.image} resizeMode="cover" />
          <Card.Title title="Alumni Network" />
          <Card.Content>
            <Text style={styles.content}>Details about quotations...</Text>
          </Card.Content>
        </Card>
      </TouchableRipple>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  image: {
    height: 200, // Adjust the height of the image as needed
    width: '100%', // Adjust the width of the image as needed
  },
  content: {
    fontSize: 14,
    marginBottom: 20,
    color: '#000',
  },
});
