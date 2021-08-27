import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PropTypes from 'prop-types';

import { colors, fonts, gStyle } from '../constants';

const TouchTextIcon = ({ icon, iconSize, onPress, text, width }) => (
  <TouchableOpacity
    activeOpacity={gStyle.activeOpacity}
    onPress={onPress}
    style={[styles.container, { width }]}>
    <View style={styles.icon}>
      {React.cloneElement(icon, { size: iconSize })}
    </View>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

TouchTextIcon.defaultProps = {
  iconSize: 20,
  width: 280,
};

TouchTextIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: colors.infoGrey,
    fontFamily: fonts.light,
    marginTop: 2,
  },
  icon: {
    justifyContent: 'center',
  },
});

export default TouchTextIcon;
