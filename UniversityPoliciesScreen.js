import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function UniversityPoliciesScreen() {
  const navigation = useNavigation();

  const policyData = [
    { id: 1, title: 'Academic Policies', description: 'Guidelines on course registration, grading, academic integrity, and graduation requirements.', icon: 'book-open-variant' },
    { id: 2, title: 'Student Conduct and Disciplinary Policies', description: 'Rules regarding student behavior, disciplinary procedures, and appeals.', icon: 'account-alert' },
    { id: 3, title: 'Financial Policies', description: 'Information on tuition fees, scholarships, financial aid, and refund policies.', icon: 'cash' },
    { id: 4, title: 'Campus Safety and Security', description: 'Procedures and rules for maintaining safety on campus, including emergency protocols.', icon: 'shield-account' },
    { id: 5, title: 'Health and Wellness Policies', description: 'Guidelines related to student health services, mental health support, and wellness programs.', icon: 'heart' },
    { id: 6, title: 'Research Policies', description: 'Rules and regulations governing research activities, ethics, and publication.', icon: 'flask' },
    { id: 7, title: 'Administrative Policies', description: 'Policies related to university administration, including staff conduct and administrative procedures.', icon: 'office-building' },
    { id: 8, title: 'Housing and Residential Life Policies', description: 'Rules governing on-campus housing, including lease agreements and residential conduct.', icon: 'home' }
  ];

  return (
    <ScrollView style={styles.container}>
      {policyData.map((policy) => (
        <TouchableRipple
          key={policy.id}
          onPress={() => navigation.navigate('PolicyDetails', { policyId: policy.id })}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Card style={styles.card}>
            <Card.Title
              title={policy.title}
              left={() => <MaterialCommunityIcons name={policy.icon} size={40} color="#d06009" />}
            />
            <Card.Content>
              <Text style={styles.content}>{policy.description}</Text>
            </Card.Content>
          </Card>
        </TouchableRipple>
      ))}
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
  content: {
    fontSize: 14,
    color: '#000',
  },
});
