import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat';
import { Avatar, IconButton } from 'react-native-paper';
import axios from 'axios';

const API_URL = 'https://graduateapp.onrender.com/chat'; // Your backend endpoint

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hi! How can I help you today?',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'SupportBot',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ]);

  const onSend = async (newMessages = []) => {
    setMessages(GiftedChat.append(messages, newMessages));
    const message = newMessages[0].text;

    try {
      const response = await axios.post(API_URL, { message });
      const text = response.data.text || 'Sorry, I didn’t get that.';
      sendBotResponse(text);
    } catch (error) {
      console.error('Error communicating with backend:', error.message);
      sendBotResponse('Sorry, I encountered an error.');
    }
  };

  const sendBotResponse = (text) => {
    const newMessage = {
      _id: messages.length + 1,
      text,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'SupportBot',
        avatar: 'https://placeimg.com/140/140/any',
      },
    };
    setMessages((previousMessages) => GiftedChat.append(previousMessages, [newMessage]));
  };

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        left: { backgroundColor: '#ECECEC' },
        right: { backgroundColor: '#007AFF' },
      }}
      textStyle={{
        left: { color: '#000' },
        right: { color: '#FFF' },
      }}
    />
  );

  const renderAvatar = (props) => (
    <Avatar.Image
      {...props}
      source={{ uri: props.currentMessage.user.avatar }}
      size={40}
    />
  );

  const renderInputToolbar = (props) => (
    <InputToolbar
      {...props}
      containerStyle={styles.inputToolbar}
      primaryStyle={{ alignItems: 'center' }}
    />
  );

  const renderSend = (props) => (
    <IconButton
      icon="send"
      size={24}
      color="#007AFF"
      onPress={() => props.onSend({ text: props.text.trim() }, true)}
    />
  );

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{ _id: 1 }}
        renderBubble={renderBubble}
        renderAvatar={renderAvatar}
        renderInputToolbar={renderInputToolbar}
        renderSend={renderSend}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 10,
  },
  card: {
    flex: 1,
    borderRadius: 10,
    elevation: 1,
    opacity: 10,
  },
  inputToolbar: {
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
});

export default ChatbotScreen;
