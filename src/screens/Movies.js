import * as React from 'react';
import { Text, View } from 'react-native';

import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';
import { gStyle } from '../constants';

const Movies = () => (
  <View style={gStyle.container}>
    <HeaderHome show />

    <View style={gStyle.spacer96} />

    <View style={gStyle.pH4}>
      <Text style={gStyle.heading}>Movies</Text>
    </View>

    <Cast />
  </View>
);

export default Movies;
