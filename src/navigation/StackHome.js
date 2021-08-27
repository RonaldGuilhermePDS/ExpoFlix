import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import PropTypes from 'prop-types';

import SvgHome from '../components/icons/Svg.Home';
import { gStyle } from '../constants';
import HomeScreen from '../screens/Home';
import MoviesScreen from '../screens/Movies';
import MyListScreen from '../screens/MyList';
import TvShowsScreen from '../screens/TvShows';

const Icon = ({ focused }) => <SvgHome active={focused} />;

Icon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

export default createStackNavigator(
  {
    HomeMain: {
      screen: HomeScreen,
      navigationOptions: {
        headerStyle: gStyle.navHeaderStyle,
      },
    },
    HomeTvShows: {
      screen: TvShowsScreen,
      navigationOptions: {
        headerStyle: gStyle.navHeaderStyle,
      },
    },
    HomeMovies: {
      screen: MoviesScreen,
      navigationOptions: {
        headerStyle: gStyle.navHeaderStyle,
      },
    },
    HomeMyList: {
      screen: MyListScreen,
      navigationOptions: {
        headerStyle: gStyle.navHeaderStyle,
      },
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: Icon,
    },
  }
);
