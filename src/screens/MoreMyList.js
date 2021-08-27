import * as React from 'react';
import { View } from 'react-native';

import Header from '../components/Header';
import { colors, gStyle } from '../constants';

const MoreMyList = () => (
  <View style={gStyle.container}>
    <Header bg={colors.headerBarBg} showBack title="My List" />
  </View>
);

export default MoreMyList;
