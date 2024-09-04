import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DigitalIDScreen = () => {
  // Updated data for the student ID based on the uploaded image
  const studentData = {
    photo: 'file:///mnt/data/WhatsApp Image 2024-08-14 at 12.11.32_68f61094.jpg', // Local file path to the image
    studentId: 'R231602U',
    name: 'I C Shumbamhini',
    degreeProgram: 'HAI',
    semester: '2',
    academicYear: '2023-2024',
    signature: 'https://via.placeholder.com/150', // You can add a URL to the student's signature if available
    barcode: 'https://via.placeholder.com/200x50', // You can add a URL to the barcode if available
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.header}>
          <Image source={{ uri: studentData.photo }} style={styles.photo} />
          <Text style={styles.name}>{studentData.name}</Text>
          <Text style={styles.degree}>Degree Program: {studentData.degreeProgram}</Text>
          <Text style={styles.details}>ID: {studentData.studentId}</Text>
          <Text style={styles.details}>Semester: {studentData.semester}</Text>
          <Text style={styles.details}>Academic Year: {studentData.academicYear}</Text>
        </View>
        <View style={styles.footer}>
          <Image source={{ uri: studentData.signature }} style={styles.signature} />
          <Image source={{ uri: studentData.barcode }} style={styles.barcode} />
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F0F0',
  },
  card: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  degree: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#333',
  },
  footer: {
    alignItems: 'center',
  },
  signature: {
    width: 150,
    height: 50,
    marginVertical: 10,
  },
  barcode: {
    width: 200,
    height: 50,
  },
});

export default DigitalIDScreen;
