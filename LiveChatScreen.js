// LiveChatScreen.js
import React, { useState } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LiveChatScreen = () => {
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image size={40} source={{ uri: 'https://placeimg.com/140/140/any' }} />
        <Text style={styles.headerText}>Counselor Name</Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{ _id: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0033A0',
  },
  headerText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 18,
  },
});

export default LiveChatScreen;
