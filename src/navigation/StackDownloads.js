import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import PropTypes from 'prop-types';

import SvgDownloads from '../components/icons/Svg.Downloads';
import DownloadsScreen from '../screens/Downloads';
import navigationOptions from './defaultOptions';

const Icon = ({ focused }) => <SvgDownloads active={focused} />;

Icon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

export default createStackNavigator(
  {
    DownloadsMain: {
      screen: DownloadsScreen,
      navigationOptions,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'Downloads',
      tabBarIcon: Icon,
    },
  }
);
