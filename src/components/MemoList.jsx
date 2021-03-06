/* eslint-disable linebreak-style */
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert, FlatList,
} from 'react-native';
// import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  shape, string, instanceOf, arrayOf,
} from 'prop-types';
import firebase from 'firebase';

import Icon from './Icon';
import { dateToString } from '../utils';

export default function MemoList(props) {
  const { memos } = props;
  const navigation = useNavigation();

  function deleteMemo(id) {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      Alert.alert('you really want to delete?', 'super-duperly sure??', [
        {
          text: 'wait! second thoughts..',
          onPress: () => {},
        },
        {
          text: 'yup delete bye~',
          style: 'destruction',
          onPress: () => {
            ref.delete().catch(() => {
              Alert.alert('oops, something went wrong');
            });
          },
        },
      ]);
    }
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail', { id: item.id }); }}
      >
        <View style={styles.memoInner}>
          <Text style={styles.memoListItemTitle} numberOfLine={0}>{item.bodyText}</Text>
          <Text style={styles.memoListItemDate}>{dateToString(item.updatedAt)}</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { deleteMemo(item.id); }}
        >
          <Icon name="delete" size={30} color="#939292" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        // eslint-disable-next-line react/jsx-no-bind
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

MemoList.propTypes = {
  memos: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  memoInner: {
    flex: 1,
  },
  memoListItemTitle: {
    fontSize: 15,
    lineHeight: 24,
    height: 23,
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
