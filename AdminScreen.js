// AdminScreen.js
import React from 'react';
import { View, StyleSheet, ScrollView , Image} from 'react-native';
import { Card, Text, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function AdminScreen() {
 const navigation = useNavigation();
const image1 = require("C:\\Users\\Christian\\GraduateApp\\assets\\FEES.png"); // Adjust the path as needed
const image2 = require("C:\\Users\\Christian\\GraduateApp\\assets\\MENT.png"); // Adjust the path as needed
const image3 = require("C:\\Users\\Christian\\GraduateApp\\assets\\POLICIES.png"); // Adjust the path as needed
const image4 = require("C:\\Users\\Christian\\GraduateApp\\assets\\QOUTES.png");

  return (
    <ScrollView style={styles.container}>
        <TouchableRipple onPress={() => navigation.navigate('Fees')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
         <Image
                   source={image1}
                   style={styles.image}
                    resizeMode="cover"
                  />
          <Card.Title title="Fees Payment" />
          <Card.Content>
            <Text style={styles.content}>Details about fees payment...</Text>
          </Card.Content>
        </Card>
      </TouchableRipple>



     <TouchableRipple onPress={() => navigation.navigate('Policies')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
         <Image
                   source={image3}
                   style={styles.image}
                    resizeMode="cover"
                  />
          <Card.Title title="University Policies" />
          <Card.Content>
            <Text style={styles.content}>Details about university policies...</Text>
          </Card.Content>
        </Card>
      </TouchableRipple>

       <TouchableRipple onPress={() => navigation.navigate('Quotes')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
         <Image
                   source={image4}
                   style={styles.image}
                    resizeMode="cover"
                  />
          <Card.Title title="Quotations" />
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
    color: '#000',
  },
});
