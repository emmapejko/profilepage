import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NameScreen = ({ navigation, route }) => {
  const { name, number, email, bio, image } = route.params;

  const [firstName, setFirstName] = useState(name.split(' ')[0]);
  const [lastName, setLastName] = useState(name.split(' ')[1]);

  return (
    <>
    <View style={styles.backButton}>
      <Pressable onPress={() => navigation.navigate('Home', { name : name, number: number, email: email, bio: bio, image: image })}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
    </View>
    <View style={styles.container}>
      <Text>What's your name?</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextInput
          placeholder="First Name"
          onChangeText={text => setFirstName(text)}
          defaultValue={firstName}
        />
        <TextInput
          placeholder="Last Name"
          onChangeText={text => setLastName(text)}
          defaultValue={lastName}
        />
      </View>
      <Button
        title="Update"
        onPress={() => navigation.navigate('Home', { name: `${firstName} ${lastName}`, number: number, email: email, bio: bio, image: image })}
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

export default NameScreen;