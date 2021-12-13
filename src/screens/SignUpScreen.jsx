/* eslint-disable linebreak-style */
import React from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';

import Button from '../components/Button';

export default function SignUpScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up Page</Text>
        <TextInput style={styles.input} value="your name here" />
        <TextInput style={styles.input} value="password please" />
        <Button
          label="Submit!"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'MemoList' }],
            });
          }}
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
