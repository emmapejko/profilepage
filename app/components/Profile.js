import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import ProfileImage from "./ProfileImage";
import Name from "./Name";
import Number from "./Number";
import Email from "./Email";
import Bio from "./Bio";

const Profile = () => {
  const [view, setView] = useState('main');
  const [image, setImage] = useState('');
  const [name, setName] = useState('Full Name');
  const [number, setNumber] = useState('(800) 800-8888');
  const [email, setEmail] = useState('example@gmail.com');
  const [bio, setBio] = useState('hello there!');

  const getView = () => {
    if (view === 'image') {
      return (
        <ProfileImage image={image}/>
      )
    } else if (view === 'name') {
      return (
        <Name name={name} />
      )
    } else if (view === 'number') {
      return (
        <Number number={number} />
      )
    } else if (view === 'email') {
      return (
        <Email email={email} />
      )
    } else if (view === 'bio') {
      return (
        <Bio bio={bio} />
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>Edit Profile</Text>
          <View style={styles.profileImageView}>
            <Pressable onPress={() => setView('image')}>
            <Image
              style={styles.profileImage}
              source={ image.length ? { uri: image } : require('../assets/profilepic.png')}
            />
            {/* <MaterialCommunityIcons name="pencil-circle-outline" size={24} color="#3471eb" /> */}
            </Pressable>
          </View>
          <View style={styles.box}>
            <Pressable onPress={() => setView('name')}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={styles.label}>Name</Text>
                  <Text style={styles.text}>{name}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Entypo name="chevron-thin-right" size={30} color="gray" />
                </View>
              </View>
            </Pressable>
          </View>
          <View style={styles.box}>
            <Pressable onPress={() => setView('number')}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={styles.label}>Phone</Text>
                  <Text style={styles.text}>{number}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Entypo name="chevron-thin-right" size={30} color="gray" />
                </View>
              </View>
            </Pressable>
          </View>
          <View style={styles.box}>
            <Pressable onPress={() => setView('email')}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={styles.label}>Email</Text>
                  <Text style={styles.text}>{email}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Entypo name="chevron-thin-right" size={30} color="gray" />
                </View>
              </View>
            </Pressable>
          </View>
          <View style={styles.box}>
            <Pressable onPress={() => setView('bio')}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={styles.label}>Bio</Text>
                  <Text style={styles.text}>{bio}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Entypo name="chevron-thin-right" size={30} color="gray" />
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      )
    }
  }

  return (
    getView()
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
    paddingTop: 70,
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