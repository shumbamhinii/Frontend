import React from 'react';
import { View, StyleSheet, ScrollView, Image  } from 'react-native';
import { Card, Text, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function AcademicsScreen() {
  const navigation = useNavigation();
const image1 = require("./assets/COF.png");
const image2 = require("./assets/COREG.png");
const image3 = require("./assets/RESC.png");
 // Adjust the path as needed

  return (
    <ScrollView style={styles.container}>
      <TouchableRipple onPress={() => navigation.navigate('CoursesOnOffer')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
        <Image
           source={image1}
           style={styles.image}
            resizeMode="cover"
          />
          <Card.Title title="Courses on Offer" />

          <Card.Content>

            <Text style={styles.content}>Information about various courses...</Text>
          </Card.Content>
        </Card>
      </TouchableRipple>

      <TouchableRipple onPress={() => navigation.navigate('CourseReg')} rippleColor="rgba(0, 0, 0, .32)">

        <Card style={styles.card}>
        <Image
            source={image2}
             style={styles.image}
              resizeMode="cover"
               />
          <Card.Title title="Course Registration" />
          <Card.Content>

            <Text style={styles.content}>Details about specific courses...</Text>
          </Card.Content>
        </Card>
      </TouchableRipple>

     <TouchableRipple onPress={() => navigation.navigate('ResearchP')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
               <Image
                    source={image3}
                     style={styles.image}
                      resizeMode="cover"
                       />
          <Card.Title title="Research Programs" />
          <Card.Content>

            <Text style={styles.content}>Information about research programs...</Text>
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
