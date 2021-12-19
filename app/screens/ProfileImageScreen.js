import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const ProfileImageScreen = ({ navigation, route }) => {
  const { name, number, email, bio, image } = route.params;

  const [newImage, setNewImage] = useState(image);

  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setNewImage(pickerResult.uri);
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
    <View style={styles.backButton}>
      <Pressable onPress={() => navigation.navigate('Home', { number : number, name: name, email: email, bio: bio, image: image })}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
    </View>
    <View style={styles.container}>
      <Text style={styles.header}>Upload a photo of yourself:</Text>
        <Pressable onPress={openImagePickerAsync}>
          <Image
            style={styles.thumbnail}
            source={ newImage ? { uri: newImage } : require('../assets/profilepic.png')}
          />
        </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Home', { image: newImage, number: number, name: name, email: email, bio: bio })}
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
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
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
})

export default ProfileImageScreen;