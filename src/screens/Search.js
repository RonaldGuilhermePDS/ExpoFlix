import * as React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import Cast from '../components/Cast';
import HeaderSearch from '../components/HeaderSearch';
import { gStyle } from '../constants';

const Search = () => (
  <React.Fragment>
    <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
      <View style={gStyle.container}>
        <HeaderSearch />
      </View>
    </TouchableWithoutFeedback>

    <Cast />
  </React.Fragment>
);

export default Search;
