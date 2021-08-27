import { createBottomTabNavigator } from 'react-navigation-tabs';

import { colors } from '../constants';
import StackDownloads from './StackDownloads';
import StackHome from './StackHome';
import StackMore from './StackMore';
import StackSearch from './StackSearch';

export default createBottomTabNavigator(
  {
    StackHome,
    StackSearch,
    StackDownloads,
    StackMore,
  },
  {
    initialRouteName: 'StackHome',
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.inactiveGrey,
      style: {
        backgroundColor: colors.black,
        borderTopWidth: 0,
      },
    },
  }
);
