import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';

const CourseAssessmentScreen = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        const response = await axios.get('http://graduateapp.onrender.com/assessments'); // Adjust this URL to your server's address
        const formattedData = response.data.map(item => ({
          id: item.id,
          title: `${item.course_code} - ${item.course_name}`,
          grade: item.total >= 70 ? '1st' : item.total >= 60 ? '2.1' : item.total >= 50 ? '2.2' : item.total >= 40 ? '3rd' : 'F',
          assessments: [
            { name: 'Assessment 1', score: `${item.assessment_1}%` },
            { name: 'Assessment 2', score: `${item.assessment_2}%` },
            { name: 'Assessment 3', score: `${item.assessment_3}%` },
            { name: 'Assessment 4', score: `${item.assessment_4}%` },
            { name: 'Assessment 5', score: `${item.assessment_5}%` },
          ],
          image: 'https://via.placeholder.com/150', // Replace with a relevant image URL if available
        }));
        setCourses(formattedData);
      } catch (error) {
        console.error('Error fetching assessments:', error);
        alert('Failed to fetch course assessments. Please try again.');
      }
    };

    fetchAssessments();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {courses.map(course => (
        <Card key={course.id} style={styles.card}>
          <Card.Cover source={{ uri: course.image }} style={styles.image} />
          <Card.Content>
            <Title style={styles.title}>{course.title}</Title>
            <Paragraph style={styles.grade}>Grade: {course.grade}</Paragraph>
            <View style={styles.assessmentList}>
              {course.assessments.map((assessment, index) => (
                <View key={index} style={styles.assessmentItem}>
                  <Text style={styles.assessmentName}>{assessment.name}:</Text>
                  <Text style={styles.assessmentScore}>{assessment.score}</Text>
                </View>
              ))}
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
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  grade: {
    fontSize: 16,
    color: '#007BFF',
  },
  assessmentList: {
    marginTop: 10,
  },
  assessmentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  assessmentName: {
    fontSize: 14,
    color: '#333',
  },
  assessmentScore: {
    fontSize: 14,
    color: '#333',
  },
});

export default CourseAssessmentScreen;
