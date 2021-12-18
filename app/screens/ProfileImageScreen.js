import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileImageScreen = ({ navigation, route }) => {
  const { name, number, email, bio, image } = route.params;

  const [newImage, setNewImage] = useState(image);

  return (
    <>
    <View style={styles.backButton}>
      <Pressable onPress={() => navigation.navigate('Home', { number : number, name: name, email: email, bio: bio, image: image })}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
    </View>
    <View style={styles.container}>
      <Text>Upload a photo of yourself:</Text>
        <Image
          source={ newImage ? { uri: newImage } : require('../assets/profilepic.png')}
        />
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
  }
})

export default ProfileImageScreen;