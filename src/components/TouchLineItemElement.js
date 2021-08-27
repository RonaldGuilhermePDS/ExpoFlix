import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PropTypes from 'prop-types';

import { colors, fonts, gStyle } from '../constants';

const TouchLineItemElement = ({ element, onPress, text }) => (
  <TouchableOpacity
    activeOpacity={gStyle.activeOpacity}
    onPress={onPress}
    style={styles.container}>
    <Text style={styles.text}>{text}</Text>
    <View style={styles.element}>{React.cloneElement(element)}</View>
  </TouchableOpacity>
);

TouchLineItemElement.propTypes = {
  element: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.regular,
    fontSize: 16,
  },
  element: {
    justifyContent: 'center',
    marginRight: 4,
  },
});

export default TouchLineItemElement;
