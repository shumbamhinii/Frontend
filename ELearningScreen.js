import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import io from 'socket.io-client';

const ELearningScreen = ({ navigation, route }) => {
  const [chats, setChats] = useState([]);
  const socket = io('ws://graduateapp.onrender.com'); // Replace with your server URL

  const userId = route.params?.userId || 'R231602U'; // Default value for testing, replace with actual logic

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      setChats((prevChats) => [...prevChats, message]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const handlePress = (chat) => {
    navigation.navigate('Chat', { chatId: chat.id, chatName: chat.name });
  };

  const exampleChats = [
    { id: '1', name: 'Group Study 1', lastMessage: 'See you in class!', timestamp: '10:30 AM', avatar: 'https://i.pravatar.cc/150?img=1', userId: 'R231602U' },
    { id: '2', name: 'John Doe', lastMessage: 'Need help with the assignment', timestamp: '9:45 AM', avatar: 'https://i.pravatar.cc/150?img=2', userId: 'R231602U' },
    { id: '3', name: 'Jane Smith', lastMessage: 'Did you complete the homework?', timestamp: '8:30 AM', avatar: 'https://i.pravatar.cc/150?img=3', userId: 'R231603X' },
  ];

  const allChats = [...exampleChats, ...chats];
  const filteredChats = allChats.filter((chat) => chat.userId === userId);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredChats}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => handlePress(item)}
          >
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.chatInfo}>
              <View style={styles.chatHeader}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.timestamp}>{item.timestamp}</Text>
              </View>
              <Text style={styles.lastMessage}>{item.lastMessage}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.startChatButton} onPress={() => navigation.navigate('Contacts')}>
        <Text style={styles.startChatButtonText}>Start Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5ddd5',
  },
  chatItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  timestamp: {
    color: '#777',
    fontSize: 12,
  },
  lastMessage: {
    color: '#777',
    marginTop: 5,
  },
  startChatButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#d06009',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 5,
  },
  startChatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ELearningScreen;
