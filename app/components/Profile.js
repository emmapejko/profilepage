import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const Profile = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('Full Name');
  const [number, setNumber] = useState('(800) 800-8888');
  const [email, setEmail] = useState('example@gmail.com');
  const [bio, setBio] = useState('hello there!');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>
      <View style={styles.profileImageView}>
        <Pressable onPress={() => console.log('image pressed')}>
        <Image
          style={styles.profileImage}
          source={ image.length ? { uri: image } : require('../assets/profilepic.png')}
        />
        </Pressable>
      </View>
      <View style={styles.box}>
        <Pressable onPress={() => console.log('name pressed')}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.text}>{name}</Text>
        </Pressable>
      </View>
      <View style={styles.box}>
        <Pressable onPress={() => console.log('number pressed')}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.text}>{number}</Text>
        </Pressable>
      </View>
      <View style={styles.box}>
        <Pressable onPress={() => console.log('email pressed')}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.text}>{email}</Text>
        </Pressable>
      </View>
      <View style={styles.box}>
        <Pressable onPress={() => console.log('bio pressed')}>
          <Text style={styles.label}>Tell us about yourself</Text>
          <Text style={styles.text}>{bio}</Text>
        </Pressable>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  profileImageView: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: '#3471eb',
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 100
  },
  header: {
    fontSize: 30,
    color: '#3471eb',
    paddingTop: 100,
    paddingBottom: 20,
    alignSelf: 'center',
  },
  label: {
    fontSize: 15,
    color: 'gray',
    paddingTop: 5,
    paddingBottom: 5
  },
  text: {
    fontSize: 20,
  },
  box: {
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 5,
    alignSelf: 'stretch'
  }
})

export default Profile;