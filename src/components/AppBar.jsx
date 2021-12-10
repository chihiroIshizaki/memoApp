/* eslint-disable linebreak-style */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Appbar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>My Memo</Text>
        <Text style={styles.appbarRight}>Logout</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#95CBA7',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 44,
  },
  appbarTitle: {
    marginBottom: 16,
    fontSize: 26,
    lineHeight: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
