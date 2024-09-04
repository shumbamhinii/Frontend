import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const image1 = require("C:\\Users\\Christian\\GraduateApp\\assets\\clubs.png"); // Adjust the path as needed
const image2 = require("C:\\Users\\Christian\\GraduateApp\\assets\\WORK.png"); // Adjust the path as needed
const image3 = require("C:\\Users\\Christian\\GraduateApp\\assets\\SPORTS.png"); // Adjust the path as needed

export default function ExtracurricularScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <TouchableRipple onPress={() => navigation.navigate('Clubs')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
          <Image
            source={image1}
            style={styles.image}
            resizeMode="cover"
          />
          <Card.Title title="Clubs and Societies" />
          <Card.Content>
            <Text style={styles.content}>Information about various clubs and societies...</Text>
          </Card.Content>
        </Card>
      </TouchableRipple>

      <TouchableRipple onPress={() => navigation.navigate('Events')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
          <Image
            source={image2}
            style={styles.image}
            resizeMode="cover"
          />
          <Card.Title title="Events and Workshops" />
          <Card.Content>
            <Text style={styles.content}>Details about upcoming events and workshops...</Text>
          </Card.Content>
        </Card>
      </TouchableRipple>

       <TouchableRipple onPress={() => navigation.navigate('Sports')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
          <Image
            source={image3}
            style={styles.image}
            resizeMode="cover"
          />
          <Card.Title title="Sports and Recreation" />
          <Card.Content>
            <Text style={styles.content}>Information about sports and recreational activities...</Text>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0033A0',
  },
    header: {
        backgroundColor: '#0033A0',
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

