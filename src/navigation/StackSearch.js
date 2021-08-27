import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import PropTypes from 'prop-types';

import SvgSearch from '../components/icons/Svg.Search';
import SearchScreen from '../screens/Search';
import navigationOptions from './defaultOptions';

const Icon = ({ focused }) => <SvgSearch active={focused} />;

Icon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

export default createStackNavigator(
  {
    SearchMain: {
      screen: SearchScreen,
      navigationOptions,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: Icon,
    },
  }
);
