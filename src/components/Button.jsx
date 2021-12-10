/* eslint-disable linebreak-style */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function Button(props) {
  const { label } = props;
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
}

Button.propTypes = {
  label: string.isRequired,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#B5DEF0',
    borderRadius: 3,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonLabel: {
    fontSize: 16,
    paddingVertical: 9,
    paddingHorizontal: 24,
  },
});
