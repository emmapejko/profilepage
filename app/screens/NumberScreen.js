import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NumberScreen = ({ navigation, route }) => {
  const { name, number, email, bio, image } = route.params;

  const [newNumber, setNewNumber] = useState(number);

  const formatNumber = (value) => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, "");

    if (phoneNumber.length < 4) return phoneNumber;
    if (phoneNumber.length < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }

  const handleChange = (value) => {
    const formattedNumber = formatNumber(value);
    setNewNumber(formattedNumber);
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
    <View style={styles.backButton}>
      <Pressable onPress={() => navigation.navigate('Home', { number : number, name: name, email: email, bio: bio, image: image })}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
    </View>
    <View style={styles.container}>
      <Text style={styles.header}>What's your phone number?</Text>
        <View style={styles.input}>
          <Text style={styles.label}>Your phone number</Text>
          <TextInput
            onChangeText={text => handleChange(text)}
            defaultValue={newNumber}
            style={styles.numberInput}
            keyboardType={'phone-pad'}
            maxLength={14}
          />
        </View>
      <Pressable
        onPress={() => navigation.navigate('Home', { number: newNumber, name: name, email: email, bio: bio, image: image })}
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
    marginTop: '70%',
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
    width: '80%',
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
  numberInput: {
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 25,
  }
})

export default NumberScreen;