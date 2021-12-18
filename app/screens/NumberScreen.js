import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NumberScreen = ({ navigation, route }) => {
  const { name, number, email, bio, image } = route.params;

  const [newNumber, setNewNumber] = useState(number);

  return (
    <>
    <View style={styles.backButton}>
      <Pressable onPress={() => navigation.navigate('Home', { number : number, name: name, email: email, bio: bio, image: image })}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
    </View>
    <View style={styles.container}>
      <Text>What's your phone number?</Text>
        <TextInput
          placeholder="Your Phone Number"
          onChangeText={text => setNewNumber(text)}
          defaultValue={newNumber}
        />
      <Button
        title="Update"
        onPress={() => navigation.navigate('Home', { number: newNumber, name: name, email: email, bio: bio, image: image })}
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

export default NumberScreen;