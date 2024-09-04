import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';

const RegistrationStatusScreen = ({ navigation }) => {
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegisteredCourses = async () => {
      try {
        const response = await axios.get('http://graduateapp.onrender.com/registered-courses');

        const formattedCourses = response.data.map(course => ({
          ...course,
          compulsory: course.compulsory ? 'Yes' : 'No',
          // Add any additional formatting or data transformation here if needed
        }));

        setRegisteredCourses(formattedCourses);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching registered courses:', error);
        setLoading(false);
      }
    };

    fetchRegisteredCourses();
  }, []);
  const renderCourseItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('CourseDetail', { course: item })}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.courseContainer}>
            <Text style={styles.courseCode}>{item.code}</Text>
            <Text style={styles.courseName}>{item.name}</Text>
            <Text style={styles.courseDetails}>Semester: {item.semester}</Text>
            <Text style={styles.courseDetails}>Compulsory: {item.compulsory ? 'Yes' : 'No'}</Text>
            <Text style={styles.courseDetails}>Department: {item.department}</Text>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0033A0" />
        <Text style={styles.loadingText}>Loading Registered Courses...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={registeredCourses} renderItem={renderCourseItem} keyExtractor={(item) => item.code} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F0F0',
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
  card: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  courseContainer: {
    padding: 16,
  },
  courseCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0033A0',
  },
  courseName: {
    fontSize: 14,
    marginVertical: 4,
    color: '#000000',
  },
  courseDetails: {
    fontSize: 12,
    color: '#555555',
  },
});

export default RegistrationStatusScreen;
