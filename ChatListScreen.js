// ChatListScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ChatListScreen = ({ navigation }) => {
  // Example chat data
  const chats = [
    { id: '1', name: 'Group Study 1', lastMessage: 'See you in class!' },
    { id: '2', name: 'Joh Doe', lastMessage: 'Need help with the assignment' },
    // Add more chat entries as needed
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => navigation.navigate('Chat', { chatId: item.id, chatName: item.name })}
          >
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.lastMessage}>{item.lastMessage}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chatInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatName: {
    fontWeight: 'bold',
  },
  lastMessage: {
    color: '#777',
  },
});

export default ChatListScreen;
