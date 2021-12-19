import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Button, Image } from 'react-native';
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
    <>
    <View style={styles.backButton}>
      <Pressable onPress={() => navigation.navigate('Home', { number : number, name: name, email: email, bio: bio, image: image })}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
    </View>
    <View style={styles.container}>
      <Text>Upload a photo of yourself:</Text>
        <Pressable onPress={openImagePickerAsync}>
          <Image
            style={styles.thumbnail}
            source={ newImage ? { uri: newImage } : require('../assets/profilepic.png')}
          />
        </Pressable>
      <Button
        title="Update"
        onPress={() => navigation.navigate('Home', { image: newImage, number: number, name: name, email: email, bio: bio })}
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
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
})

export default ProfileImageScreen;