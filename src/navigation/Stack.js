import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ModalAddProfile from '../screens/ModalAddProfile';
import ModalCastConnect from '../screens/ModalCastConnect';
import ModalManageProfiles from '../screens/ModalManageProfiles';
import ModalVideo from '../screens/ModalVideo';
import ModalWebView from '../screens/ModalWebView';
import TabNavigator from './TabNavigator';

const StackNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
    ModalCastConnect,
    ModalAddProfile,
    ModalManageProfiles,
    ModalVideo,
    ModalWebView,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Main',
    mode: 'modal',
  }
);

const App = createAppContainer(StackNavigator);

export default App;
