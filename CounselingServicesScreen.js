import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the Icon component
import { useNavigation } from '@react-navigation/native';

const CounselingServicesScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableRipple onPress={() => navigation.navigate('CounselingServicesOverview')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
          <View style={styles.iconContainer}>
            <Icon name="info" size={50} color="#d06009" />
          </View>
          <Card.Title title="Counseling Services Overview" />
          <Card.Content>
            <Text style={styles.content}>Explore the various counseling services available...</Text>
          </Card.Content>
        </Card>
      </TouchableRipple>

      <TouchableRipple onPress={() => navigation.navigate('CounselorProfiles')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
          <View style={styles.iconContainer}>
            <Icon name="person" size={50} color="#d06009" />
          </View>
          <Card.Title title="Counselor Profiles" />
          <Card.Content>
            <Text style={styles.content}>Meet our counselors and learn more about their expertise...</Text>
          </Card.Content>
        </Card>
      </TouchableRipple>

      <TouchableRipple onPress={() => navigation.navigate('LiveChat')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
          <View style={styles.iconContainer}>
            <Icon name="chat" size={50} color="#d06009" />
          </View>
          <Card.Title title="Live Chat with Counselors" />
          <Card.Content>
            <Text style={styles.content}>Chat live with our counselors for immediate support...</Text>
          </Card.Content>
        </Card>
      </TouchableRipple>

      <TouchableRipple onPress={() => navigation.navigate('CResources')} rippleColor="rgba(0, 0, 0, .32)">
        <Card style={styles.card}>
          <View style={styles.iconContainer}>
            <Icon name="library-books" size={50} color="#d06009" />
          </View>
          <Card.Title title="Resources and Articles" />
          <Card.Content>
            <Text style={styles.content}>Explore articles and resources on mental health...</Text>
          </Card.Content>
        </Card>
      </TouchableRipple>
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
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  content: {
    fontSize: 14,
    marginBottom: 20,
    color: '#000',
  },
});

export default CounselingServicesScreen;
