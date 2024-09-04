import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import * as Contacts from 'expo-contacts';
import { MaterialIcons } from '@expo/vector-icons'; // Ensure @expo/vector-icons is installed
import { useNavigation } from '@react-navigation/native';

// Memoized ContactItem component
const ContactItem = React.memo(({ contact, onSelect }) => (
  <TouchableOpacity style={styles.contactItem} onPress={() => onSelect(contact)}>
    <Image
      source={{ uri: 'https://i.pravatar.cc/150?img=3' }} // Placeholder for avatar
      style={styles.avatar}
    />
    <View style={styles.contactInfo}>
      <Text style={styles.contactName}>{contact.name}</Text>
      {contact.phoneNumbers && contact.phoneNumbers.length > 0 && (
        <Text style={styles.contactNumber}>{contact.phoneNumbers[0].number}</Text>
      )}
    </View>
  </TouchableOpacity>
));

const ContactsScreen = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [permissionGranted, setPermissionGranted] = useState(false);
  const navigation = useNavigation(); // Access navigation prop

  useEffect(() => {
    const requestContactsPermission = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        setPermissionGranted(true);
        fetchContacts();
      } else {
        console.warn("Contacts permission denied");
      }
    };

    const fetchContacts = async () => {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers], // Request phone numbers
      });

      if (data.length > 0) {
        setContacts(data);
        setFilteredContacts(data);
      }
    };

    requestContactsPermission();
  }, []);

  useEffect(() => {
    // Filter contacts based on search query
    if (searchQuery) {
      setFilteredContacts(
        contacts.filter(contact =>
          contact.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredContacts(contacts);
    }
  }, [searchQuery, contacts]);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const handleSelectContact = (contact) => {
    console.log('Selected contact:', contact);
    // Navigate to the chat screen with the selected contact
    navigation.navigate('Chat', {
      contact: {
        name: contact.name,
        phoneNumber: contact.phoneNumbers ? contact.phoneNumbers[0].number : null,
      },
    });
  };

  const renderContactItem = useCallback(({ item }) => (
    <ContactItem contact={item} onSelect={handleSelectContact} />
  ), []);

  if (!permissionGranted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>Permission to access contacts was denied.</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Adjust if necessary
    >
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search contacts"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <MaterialIcons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContactItem}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  permissionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#999',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
    backgroundColor: '#e0e0e0', // Placeholder background
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    color: '#333',
  },
  contactNumber: {
    fontSize: 14,
    color: '#555',
  },
});

export default ContactsScreen;
