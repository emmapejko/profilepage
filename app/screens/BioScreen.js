import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BioScreen = ({ navigation, route }) => {
  const { name, number, email, bio, image } = route.params;

  const [newBio, setNewBio] = useState(bio);

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
    <View style={styles.backButton}>
      <Pressable onPress={() => navigation.navigate('Home', { email: email, number : number, name: name, bio: bio, image: image })}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
    </View>
    <View style={styles.container}>
      <Text style={styles.header}>What type of passenger are you?</Text>
      <View style={styles.input}>
        <Text style={styles.label}>Write a little bit about yourself. Do you like chatting? Are you a smoker? Do you bring pets with you? Etc.</Text>
        <TextInput
          onChangeText={text => setNewBio(text)}
          defaultValue={newBio}
          style={styles.bioInput}
          multiline={true}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Home', { bio: newBio, email: email, number: number, name: name, image: image })}
        style={styles.button}
      >
        <Text style={styles.update}>Update</Text>
      </Pressable>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  backButton: {
    paddingTop: 40,
    paddingLeft: 15
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    alignSelf: "flex-start",
    padding: 30,
    fontSize: 25,
  },
  button: {
    marginTop: '20%',
    marginBottom: '20%',
    width: '80%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  update: {
    color: 'white',
    fontWeight: 'bold'
  },
  input: {
    width: '80%',
    height: 200,
    borderStyle: 'solid',
    borderColor: '#D3D3D3',
    borderWidth: 1,
  },
  label: {
    paddingTop: 5,
    paddingLeft: 5,
    fontSize: 15,
    color: '#8c8888'
  },
  bioInput: {
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 20,
  }
})

export default BioScreen;