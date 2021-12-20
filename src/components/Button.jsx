/* eslint-disable linebreak-style */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { func, string, shape } from 'prop-types';

export default function Button(props) {
  const { label, onPress, style } = props;
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
  style: shape(),
};

Button.defaultProps = {
  onPress: null,
  style: null,
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
