/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';
import { translateErrors } from '../utils';

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlePress() {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      });
    navigation.reset({
      index: 0,
      routes: [{ name: 'MemoList' }],
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up Page</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="your mail here"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          secureTextEntry
          placeholder="password please"
          textContentType="password"
        />
        <Button
          label="Submit!"
          // eslint-disable-next-line react/jsx-no-bind
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>are we already friends??</Text>
          <TouchableOpacity onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          }}
          >
            <Text style={styles.footerLink}>login from here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 24,
    color: '#95CBA7',
    marginBottom: 20,
  },
  input: {
    fontSize: 12,
    height: 48,
    color: '#939292',
    backgroundColor: '#F4F0E9',
    paddingLeft: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#C9C7C7',
    elevation: 1.5,
  },
  footerText: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    color: '#467FD3',
    lineHeight: 24,
  },
  footer: {
    flexDirection: 'row',
  },
});
