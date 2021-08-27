import * as React from 'react';
import { Text, View } from 'react-native';

import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';
import { gStyle } from '../constants';

const MyList = () => (
  <View style={gStyle.container}>
    <HeaderHome show />

    <View style={gStyle.spacer96} />

    <View style={gStyle.pH4}>
      <Text style={gStyle.heading}>My List</Text>
    </View>

    <Cast />
  </View>
);

export default MyList;
