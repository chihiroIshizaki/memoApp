/* eslint-disable linebreak-style */
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
// import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon';

export default function Memolist() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020年12月03日 10:00</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => {
            Alert.alert('you need this not?');
          }}
        >
          <Icon name="delete" size={30} color="#939292" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020年12月03日 10:00</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => {
            Alert.alert('you need this not?');
          }}
        >
          <Icon name="delete" size={30} color="#939292" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020年12月03日 10:00</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => {
            Alert.alert('you need this not?');
          }}
        >
          <Icon name="delete" size={30} color="#939292" />
        </TouchableOpacity>
      </TouchableOpacity>
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
  memoDelete: {
    margin: 6,
  },
});
