import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>My Memo</Text>
          <Text style={styles.appbarRight}>Logout</Text>
        </View>
      </View>

      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月03日 10:00</Text>
          </View>
          <View>
            <Text>✕</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月03日 10:00</Text>
          </View>
          <View>
            <Text>✕</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月03日 10:00</Text>
          </View>
          <View>
            <Text>✕</Text>
          </View>
        </View>
      </View>

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE8E0',
  },
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
    bottom: 64,
  },
  appbarTitle: {
    marginBottom: 16,
    fontSize: 26,
    lineHeight: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  memoListItem: {
    backgroundColor: '#EDE8E0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 22,
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
  circleButton: {
    backgroundColor: '#FFFFFF',
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 22,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.75,
    shadowRadius: 3,
    elevation: 3,
  },
  circleButtonLabel: {
    color: '#95CBA7',
    fontSize: 50,
    lineHeight: 54,
  },
});
