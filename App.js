import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Profile from './app/components/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
