import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Footer from './Footer'; // Adjust the path if necessary

export default function LayoutWithFooter({ children, navigation }) {
  const [activeIcon, setActiveIcon] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {children}
      </ScrollView>
      <Footer navigation={navigation} activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
