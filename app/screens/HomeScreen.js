import React from "react";
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation, route }) => {
  const { image, name, number, email, bio } = route.params;

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>
      <View style={styles.profileImageView}>
        <Pressable onPress={() => navigation.navigate('ProfileImage', { name: name, number: number, email: email, bio: bio, image: image })}>
        <Image
          style={styles.profileImage}
          source={ image ? { uri: image } : require('../assets/profilepic.png')}
        />
        {/* <MaterialCommunityIcons name="pencil-circle-outline" size={24} color="#3471eb" /> */}
        </Pressable>
      </View>
      <View style={styles.box}>
        <Pressable onPress={() => navigation.navigate('Name', { name: name, number: number, email: email, bio: bio, image: image })}>
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
        <Pressable onPress={() => navigation.navigate('Number', { name: name, number: number, email: email, bio: bio, image: image })}>
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
        <Pressable onPress={() => navigation.navigate('Email', { name: name, number: number, email: email, bio: bio, image: image })}>
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
        <Pressable onPress={() => navigation.navigate('Bio', { name: name, number: number, email: email, bio: bio, image: image })}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.label}>Tell us about yourself</Text>
              <Text style={styles.text}>{bio}</Text>
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Entypo name="chevron-thin-right" size={30} color="gray" />
            </View>
          </View>
        </Pressable>
      </View>
    </View>
    </ScrollView>
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

export default HomeScreen;