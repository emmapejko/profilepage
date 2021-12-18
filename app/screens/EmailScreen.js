import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EmailScreen = ({ navigation, route }) => {
  const { name, number, email, bio, image } = route.params;

  const [newEmail, setNewEmail] = useState(email);

  return (
    <>
    <View style={styles.backButton}>
      <Pressable onPress={() => navigation.navigate('Home', { email: email, number : number, name: name, bio: bio, image: image })}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
    </View>
    <View style={styles.container}>
      <Text>What's your email address?</Text>
        <TextInput
          placeholder="Your email address"
          onChangeText={text => setNewEmail(text)}
          defaultValue={newEmail}
        />
      <Button
        title="Update"
        onPress={() => navigation.navigate('Home', { email: newEmail, number: number, name: name, bio: bio, image: image })}
      />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  backButton: {
    paddingTop: 40,
    paddingLeft: 15
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

export default EmailScreen;