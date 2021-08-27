import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PropTypes from 'prop-types';

import { colors, fonts, gStyle } from '../constants';
import SvgPlay from './icons/Svg.Play';

const PromotionPlay = ({ icon, onPress, text }) => (
  <TouchableOpacity
    activeOpacity={gStyle.activeOpacity}
    onPress={onPress}
    style={styles.container}>
    <View style={styles.icon}>
      {React.cloneElement(icon, { fill: colors.black })}
    </View>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

PromotionPlay.defaultProps = {
  icon: <SvgPlay />,
  text: 'Play',
};

PromotionPlay.propTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.element,
  text: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  text: {
    color: colors.black,
    fontFamily: fonts.medium,
    fontSize: 18,
  },
  icon: {
    justifyContent: 'center',
  },
});

export default PromotionPlay;
