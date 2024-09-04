import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Modal, TextInput, Button, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Card, IconButton } from 'react-native-paper';

const CalendarScreen = () => {
  const [events, setEvents] = useState([]);
  const [markedDates, setMarkedDates] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newDate, setNewDate] = useState({ date: '', type: '', description: '' });

  // Fetch special days and personal dates
  useEffect(() => {
    const fetchDates = async () => {
      try {
        // Fetch special days
        const specialDaysResponse = await fetch('https://graduateapp.onrender.com/special-days'); // Adjust URL to your backend
        let specialDays = await specialDaysResponse.json();

        // Ensure specialDays is an array
        if (!Array.isArray(specialDays)) {
          console.warn('Expected specialDays to be an array, received:', specialDays);
          specialDays = [];
        }

        // Fetch personal dates
        const personalDatesResponse = await fetch('https://graduateapp.onrender.com/personal-dates'); // Adjust URL to your backend
        let personalDates = await personalDatesResponse.json();

        // Ensure personalDates is an array
        if (!Array.isArray(personalDates)) {
          console.warn('Expected personalDates to be an array, received:', personalDates);
          personalDates = [];
        }

        // Combine the events
        const allEvents = [...specialDays, ...personalDates];
        setEvents(allEvents);

        // Mark dates for the calendar
        const marked = allEvents.reduce((acc, event) => {
          const { dotColor } = getColorForType(event.type);
          const formattedDate = formatDate(event.date);
          acc[formattedDate] = {
            customStyles: {
              container: {
                backgroundColor: dotColor,
                borderRadius: 50,
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              },
              text: {
                color: 'white',
                fontWeight: 'bold',
              },
            },
          };
          return acc;
        }, {});

        setMarkedDates(marked);
      } catch (error) {
        console.error('Error fetching dates:', error);
      }
    };

    fetchDates();
  }, []);

  const getColorForType = (type) => {
    switch (type) {
      case 'Registration Deadline':
        return { dotColor: 'red', textColor: 'red' };
      case 'Opening Day':
        return { dotColor: 'green', textColor: 'green' };
      case 'Event':
        return { dotColor: 'blue', textColor: 'blue' };
      default:
        return { dotColor: 'gray', textColor: 'gray' };
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  };

  const formatEventDate = (dateString) => {
    const today = new Date();
    const date = new Date(dateString);

    const diffInDays = Math.floor((date - today) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {
      return "Today";
    } else if (diffInDays === 1) {
      return "Tomorrow";
    } else if (diffInDays === -1) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString(); // Fallback to the standard date format
    }
  };

  const handleAddDate = () => {
    const { date, type, description } = newDate;

    if (!date || !type || !description) {
      console.log('Please fill in all fields.');
      return;
    }

    fetch('https://graduateapp.onrender.com/add-personal-date', { // Adjust URL to your backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date,
        type,
        description,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Date added:', data);
        fetchDates(); // Refresh the data
        setIsModalVisible(false); // Close the modal
        setNewDate({ date: '', type: '', description: '' }); // Reset form fields
      })
      .catch(error => console.error('Error adding date:', error));
  };

  const handleDeleteDate = (id) => {
    Alert.alert(
      'Delete Personal Date',
      'Are you sure you want to delete this date?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            fetch('https://graduateapp.onrender.com/delete-personal-date', { // Adjust URL to your backend
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ id }),
            })
              .then(response => {
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
              })
              .then(data => {
                console.log('Date deleted:', data);
                fetchDates(); // Refresh the data
              })
              .catch(error => console.error('Error deleting date:', error));
          },
        },
      ]
    );
  };

  const handleDayPress = (day) => {
    setNewDate(prev => ({ ...prev, date: day.dateString }));
    setIsModalVisible(true);
  };

  const renderEventItem = ({ item }) => {
    const { textColor } = getColorForType(item.type);

    return (
      <Card style={styles.eventCard}>
        <Card.Content>
          <Text style={[styles.eventTitle, { color: textColor }]}>{item.type}</Text>
          <Text style={[styles.eventDate, { color: textColor }]}>{formatEventDate(item.date)}</Text>
          <Text style={[styles.eventDescription, { color: textColor }]}>{item.description}</Text>
          <IconButton
            icon="delete"
            size={20}
            onPress={() => handleDeleteDate(item.id)}
            style={styles.deleteButton}
          />
        </Card.Content>
      </Card>
    );
  };

  // Generate unique keys for FlatList items
  const keyExtractor = (item) => {
    return `${item.id}`; // Ensure unique key
  };

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        markedDates={markedDates}
        markingType={'custom'}
        onDayPress={handleDayPress}
      />
      <View style={styles.eventsContainer}>
        <Text style={styles.eventsHeader}>Upcoming Events</Text>
        <FlatList
          data={events}
          renderItem={renderEventItem}
          keyExtractor={keyExtractor} // Ensure unique keys
        />
      </View>
      <IconButton
        icon="plus"
        size={30}
        onPress={() => setIsModalVisible(true)}
        style={styles.addButton}
      />
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Add Personal Date</Text>
            <TextInput
              placeholder="Date (YYYY-MM-DD)"
              value={newDate.date}
              onChangeText={text => setNewDate(prev => ({ ...prev, date: text }))}
              style={styles.input}
            />
            <TextInput
              placeholder="Type"
              value={newDate.type}
              onChangeText={text => setNewDate(prev => ({ ...prev, type: text }))}
              style={styles.input}
            />
            <TextInput
              placeholder="Description"
              value={newDate.description}
              onChangeText={text => setNewDate(prev => ({ ...prev, description: text }))}
              style={styles.input}
            />
            <Button title="Add Date" onPress={handleAddDate} />
            <Button title="Cancel" onPress={() => setIsModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  calendar: {
    margin: 10,
  },
  eventsContainer: {
    flex: 1,
    margin: 10,
  },
  eventsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventCard: {
    marginVertical: 5,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
    marginVertical: 2,
  },
  eventDescription: {
    fontSize: 14,
  },
  deleteButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6200ee',
    borderRadius: 50,
    elevation: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    padding: 5,
  },
});

export default CalendarScreen;
