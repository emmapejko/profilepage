import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NameScreen = ({ navigation, route }) => {
  const { name, number, email, bio, image } = route.params;

  const [firstName, setFirstName] = useState(name.split(' ')[0]);
  const [lastName, setLastName] = useState(name.split(' ')[1]);

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
    <View style={styles.backButton}>
      <Pressable onPress={() => navigation.navigate('Home', { name : name, number: number, email: email, bio: bio, image: image })}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
    </View>
    <View style={styles.container}>
      <Text style={styles.header}>What's your name?</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
        <View style={styles.input}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            onChangeText={text => setFirstName(text)}
            defaultValue={firstName}
            style={styles.nameInput}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            onChangeText={text => setLastName(text)}
            defaultValue={lastName}
            style={styles.nameInput}
          />
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate('Home', { name: `${firstName} ${lastName}`, number: number, email: email, bio: bio, image: image })}
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
    alignItems: 'center'
  },
  update: {
    color: 'white',
    fontWeight: 'bold'
  },
  input: {
    width: '48%',
    height: 70,
    borderStyle: 'solid',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    justifyContent: 'space-between'
  },
  label: {
    paddingTop: 5,
    paddingLeft: 5,
    fontSize: 15,
    color: '#8c8888'
  },
  nameInput: {
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 30,
  }
})

export default NameScreen;