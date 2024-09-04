import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import axios from 'axios';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const { width: viewportWidth } = Dimensions.get('window');

export default function Frame1() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation(); // Access the navigation prop

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('http://graduateapp.onrender.com/announcements');
        setAnnouncements(response.data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0033A0" />
        <Text style={styles.loadingText}>Loading Announcements...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Announcements PagerView */}
      <PagerView style={styles.pagerView} initialPage={0}>
        {announcements.map((announcement) => (
          <TouchableOpacity
            style={styles.page}
            key={announcement.id}
            onPress={() => navigation.navigate('AnnouncementDetail', announcement)}
          >
            <Card style={styles.card}>
              {announcement.imagedata && (
                <Image
                  source={{ uri: `data:image/png;base64,${announcement.imagedata}` }}
                  style={styles.image}
                  resizeMode="cover"
                />
              )}
              <Card.Title title={announcement.title} titleStyle={styles.title} />
              <Card.Content>
                <Text style={styles.content}>{announcement.description}</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        ))}
      </PagerView>

      {/* Upcoming Events PagerView */}
      <PagerView style={styles.pagerView} initialPage={0}>
        <TouchableOpacity
          style={styles.page}
          onPress={() => navigation.navigate('EventDetail', {
            title: 'Upcoming Events',
            description: 'Details about upcoming events and workshops...',
            imageSrc: require("C:\\Users\\Christian\\GraduateApp\\assets\\image1.png") // Adjust the path as needed
          })}
        >
          <Card style={styles.card}>
            <Image
              source={require("C:\\Users\\Christian\\GraduateApp\\assets\\image1.png")} // Adjust the path as needed
              style={styles.image}
              resizeMode="cover"
            />
            <Card.Title title="Upcoming Events" titleStyle={styles.title} />
            <Card.Content>
              <Text style={styles.content}>Details about upcoming events and workshops...</Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </PagerView>
    </View>
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
  pagerView: {
    flex: 1,
    marginBottom: 16,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: viewportWidth * 0.9, // Make the card width 90% of the viewport width
    height: 300, // Fixed height for all cards to ensure consistency
    marginBottom: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 12, // Rounded corners for the card
    overflow: 'hidden', // Ensures that content stays within the rounded corners
  },
  image: {
    height: 200, // Adjust the height of the image as needed
    width: '100%', // Adjust the width of the image as needed
  },
  content: {
    fontSize: 14,
    marginBottom: 0,
    color: '#000',
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
});
