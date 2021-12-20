/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';
import Loading from '../components/Loading';
import { translateErrors } from '../utils';

export default function LogInScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log('useEffect!');
    return () => {
      console.log('Unmount!');
    };
  }, []);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      } else {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);
  // 「 , [] 」空の配列を入れておくことで、画面がロードされたときの一度だけ実行される。
  // この[]の値を監視することができて、この[]の中身が変わったときだけ上のcallback関数が実行される

  function handlePress() {
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      })
      .then(() => {
        setLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.inner}>
        <Text style={styles.title}>Login Page</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          placeholder="your mail here"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          placeholder="password please"
          secureTextEntry
          textContentType="password"
        />
        <Button
          label="Login!"
          // eslint-disable-next-line react/jsx-no-bind
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>i dont think i know you..</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'SignUp' }],
              });
            }}
          >
            <Text style={styles.footerLink}>sign up here!</Text>
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
