import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

import { colors, fonts, gStyle } from '../constants';

const TouchText = ({ onPress, text, textStyle }) => (
  <TouchableOpacity activeOpacity={gStyle.activeOpacity} onPress={onPress}>
    <Text style={[styles.text, textStyle]}>{text}</Text>
  </TouchableOpacity>
);

TouchText.defaultProps = {
  textStyle: {},
};

TouchText.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontFamily: fonts.medium,
  },
});

export default TouchText;
