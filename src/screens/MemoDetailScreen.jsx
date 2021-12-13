/* eslint-disable linebreak-style */
import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.MemoHeader}>
        <Text style={styles.MemoTitle}>買い物リスト</Text>
        <Text style={styles.MemoDate}>2020年12月01日 10:00</Text>
      </View>
      <ScrollView style={styles.MemoBody}>
        <Text style={styles.MemoText}>
          this is a list of random sentences.
          random stuff and such
        </Text>
      </ScrollView>
      <CircleButton
        style={{ top: 61, bottom: 'auto', elevation: 4 }}
        name="pencil"
        onPress={() => { navigation.navigate('MemoEdit'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE8E0',
  },
  MemoHeader: {
    backgroundColor: '#95CBA7',
    height: 89,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
    borderTopColor: '#EDE8E0',
    borderTopWidth: 5,
    elevation: 3,
  },
  MemoTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 24,
  },
  MemoDate: {
    color: '#969090',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 16,
  },
  MemoBody: {
    paddingVertical: 32,
    paddingHorizontal: 17,
  },
  MemoText: {
    fontSize: 14,
    lineHeight: 20,
  },
});
