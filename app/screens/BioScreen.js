import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BioScreen = ({ navigation, route }) => {
  const { name, number, email, bio, image } = route.params;

  const [newBio, setNewBio] = useState(bio);

  return (
    <>
    <View style={styles.backButton}>
      <Pressable onPress={() => navigation.navigate('Home', { email: email, number : number, name: name, bio: bio, image: image })}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
    </View>
    <View style={styles.container}>
      <Text>What type of passenger are you?</Text>
        <TextInput
          placeholder="Write a little bit about yourself. Do you like chatting? Are you a smoker? Do you bring pets with you? Etc."
          onChangeText={text => setNewBio(text)}
          defaultValue={newBio}
        />
      <Button
        title="Update"
        onPress={() => navigation.navigate('Home', { bio: newBio, email: email, number: number, name: name, image: image })}
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

export default BioScreen;