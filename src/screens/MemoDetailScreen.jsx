/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import { dateToString } from '../utils';

export default function MemoDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.MemoHeader}>
        <Text style={styles.MemoTitle} numberOfLine={1}>
          {memo && memo.bodyText}
        </Text>
        <Text style={styles.MemoDate}>{memo && dateToString(memo.updatedAt)}</Text>
      </View>
      <ScrollView>
        <View style={styles.MemoBodyInner}>
          <Text style={styles.MemoText}>
            {memo && memo.bodyText}
          </Text>
        </View>
      </ScrollView>
      <CircleButton
        style={{ top: 61, bottom: 'auto', elevation: 4 }}
        name="pencil"
        onPress={() => { navigation.navigate('MemoEdit', { id: memo.id, bodyText: memo.bodyText }); }}
      />
    </View>
  );
}

MemoDetailScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

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
    fontSize: 17,
    lineHeight: 50,
  },
  MemoDate: {
    color: '#969090',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 16,
  },
  MemoBodyInner: {
    paddingTop: 32,
    paddingBottom: 80,
    paddingHorizontal: 27,
  },
  MemoText: {
    fontSize: 14,
    lineHeight: 20,
  },
});
