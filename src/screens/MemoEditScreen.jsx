/* eslint-disable linebreak-style */
import React from 'react';
import {
  View, TextInput, StyleSheet, KeyboardAvoidingView,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
// import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoEditScreen() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 14,
    lineHeight: 20,
  },
});
