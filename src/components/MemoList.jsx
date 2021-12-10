/* eslint-disable linebreak-style */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Memolist() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020年12月03日 10:00</Text>
        </View>
        <View>
          <Feather name="x" size={20} color="#939292" />
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020年12月03日 10:00</Text>
        </View>
        <View>
          <Feather name="x" size={20} color="#939292" />
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020年12月03日 10:00</Text>
        </View>
        <View>
          <Feather name="x" size={20} color="#939292" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#EDE8E0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 0.85,
    borderColor: 'rgba(0, 0, 0, 0.22)',
  },
  memoListItemTitle: {
    fontSize: 15,
    lineHeight: 20,
  },
  memoListItemDate: {
    fontSize: 10,
    lineHeight: 17,
    color: '#969090',
  },
});
