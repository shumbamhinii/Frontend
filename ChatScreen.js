import React, { useEffect, useState, useRef } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatScreen = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const ws = useRef(null);
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [sessionId, setSessionId] = useState(''); // Store session ID
  const { contact } = route.params; // Get contact from route params
  const receiverPhoneNumber = contact?.phoneNumber;

  useEffect(() => {
    // Fetch the user phone number and session ID from the server
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://graduateapp.onrender.com/api/getUserPhoneNumber');
        const data = await response.json();
        setUserPhoneNumber(data.phoneNumber);

        // Assume session ID is also returned or fetched from a different endpoint
        setSessionId(data.sessionId); // Set session ID
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();

    // Create a WebSocket connection
    ws.current = new WebSocket(`ws://graduateapp.onrender.com?sessionId=${sessionId}`); // Pass session ID in query parameters

    // WebSocket event handlers
    ws.current.onopen = () => {
      console.log('WebSocket connection established');
    };

    ws.current.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages(prevMessages => [...prevMessages, newMessage]);
    };

    ws.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.current.onclose = (event) => {
      if (event.wasClean) {
        console.log('WebSocket connection closed cleanly');
      } else {
        console.error('WebSocket connection closed with error:', event.code, event.reason);
      }
    };

    // Cleanup WebSocket connection on component unmount
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [sessionId]); // Add sessionId as dependency

  const handleSendMessage = () => {
    if (input.trim() && userPhoneNumber && receiverPhoneNumber) {
      const message = {
        sender: userPhoneNumber,
        receiver: receiverPhoneNumber,
        text: input.trim(),
      };
      ws.current.send(JSON.stringify(message));
      setMessages(prevMessages => [...prevMessages, message]);
      setInput('');
    } else {
      console.error('Phone number not set or input is empty');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.chatName}>Chat with {contact?.name}</Text>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageItem,
              item.sender === userPhoneNumber ? styles.sender : styles.receiver,
            ]}
          >
            <Text style={item.sender === userPhoneNumber ? styles.senderText : styles.receiverText}>
              {item.text}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.messagesList}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type a message"
          style={styles.textInput}
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Ionicons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5ddd5',
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  messagesList: {
    flex: 1,
  },
  messageItem: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  sender: {
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
  },
  receiver: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f1f1',
  },
  senderText: {
    color: '#fff',
  },
  receiverText: {
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
});

export default ChatScreen;
