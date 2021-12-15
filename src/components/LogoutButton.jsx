/* eslint-disable linebreak-style */
import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet, Alert,
} from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function LogoutButton() {
  const navigation = useNavigation();
  function handlePress() {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      })
      .catch(() => {
        Alert.alert('failed to logout');
      });
  }
  return (
    // eslint-disable-next-line react/jsx-no-bind
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.label}>Logout</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
  },
  label: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});
