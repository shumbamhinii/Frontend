import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Card, Title, Paragraph, Avatar, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const CounselorProfileScreen = () => {
  const [counselors, setCounselors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCounselors = async () => {
      try {
        const response = await axios.get('http://graduateapp.onrender.com/counselors');
        setCounselors(response.data);
      } catch (error) {
        console.error('Error fetching counselors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounselors();
  }, []);

  const handleBookAppointment = (counselor) => {
    navigation.navigate('AppointmentBooking', { counselor });
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {counselors.map((counselor, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content style={styles.content}>
            <Avatar.Image size={100} source={{ uri: counselor.avatar }} />
            <Card.Actions>
              <Button onPress={() => handleBookAppointment(counselor)}>
                Book Appointment
              </Button>
            </Card.Actions>
            <View style={styles.info}>
              <Title>{counselor.name}</Title>
              <Paragraph>{counselor.specialties}</Paragraph>
              <Paragraph>{counselor.qualifications}</Paragraph>
            </View>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 10,
  },
  card: {
    marginVertical: 5,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#002964',
  },
  info: {
    marginLeft: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CounselorProfileScreen;
