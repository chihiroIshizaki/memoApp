/* eslint-disable linebreak-style */
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';

import Icon from './Icon';

export default function CircleButton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Icon name={name} size={50} color="#95CBA7" />
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

CircleButton.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#FFFFFF',
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 11,
    bottom: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.75,
    shadowRadius: 3,
    elevation: 3,
  },
  circleButtonLabel: {
    color: '#95CBA7',
    fontSize: 50,
    lineHeight: 50,
  },
});
