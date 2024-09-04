// StudentSupportScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image } from 'react-native';
import { Card, TouchableRipple,Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function StudentSupportScreen() {
 const navigation = useNavigation();
const image1 = require("C:\\Users\\Christian\\GraduateApp\\assets\\TECH.png"); // Adjust the path as needed
const image2 = require("C:\\Users\\Christian\\GraduateApp\\assets\\COUNS.png"); // Adjust the path as needed
const image3 = require("C:\\Users\\Christian\\GraduateApp\\assets\\MENT.png"); // Adjust the path as needed
const image4 = require("C:\\Users\\Christian\\GraduateApp\\assets\\SCHOL.png");
  return (
    <ScrollView style={styles.container}>
    <TouchableRipple onPress={() => navigation.navigate('TechSupport')} rippleColor="rgba(0, 0, 0, .32)">
      <Card style={styles.card}>
       <Image
          source={image1}
          style={styles.image}
          resizeMode="cover"
        />
        <Card.Title title="Technical Support" />
        <Card.Content>
          <Text style={styles.content}>Details about fees payment...</Text>
        </Card.Content>
           <Card.Actions>
                   <Button
                     onPress={() => navigation.navigate('TechSupport')}
                   >
                     Learn More
                   </Button>
                 </Card.Actions>
      </Card>
    </TouchableRipple>

   <TouchableRipple onPress={() => navigation.navigate('Counseling')} rippleColor="rgba(0, 0, 0, .32)">
      <Card style={styles.card}>
       <Image
                source={image2}
                style={styles.image}
                resizeMode="cover"
              />
        <Card.Title title="Counselling Services" />
        <Card.Content>
          <Text style={styles.content}>Details about financial statements...</Text>
        </Card.Content>
      </Card>
    </TouchableRipple>

     <TouchableRipple onPress={() => navigation.navigate('Opportunities')} rippleColor="rgba(0, 0, 0, .32)">
      <Card style={styles.card}>
       <Image
                source={image3}
                style={styles.image}
                resizeMode="cover"
              />
        <Card.Title title="Opportunities" />
        <Card.Content>
          <Text style={styles.content}>Details about university policies...</Text>
        </Card.Content>
      </Card>
    </TouchableRipple>

   <TouchableRipple onPress={() => navigation.navigate('Scholarships')} rippleColor="rgba(0, 0, 0, .32)">
      <Card style={styles.card}>
       <Image
                source={image2}
                style={styles.image}
                resizeMode="cover"
              />
        <Card.Title title="Scholarships and Grants" />
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
  
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0033A0',
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
},
 image: {
    height: 200, // Adjust the height of the image as needed
    width: '100%', // Adjust the width of the image as needed
  },
  sectionContent: {
    fontSize: 14,
    marginBottom: 20,
    color: '#000',
  },
});
