/* eslint-disable linebreak-style */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, shape } from 'prop-types';

export default function CircleButton(props) {
  const { children, style } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  );
}

CircleButton.propTypes = {
  children: string.isRequired,
  style: shape(),
};

CircleButton.defaultProps = {
  style: null,
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
