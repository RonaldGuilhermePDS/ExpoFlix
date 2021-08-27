import * as React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

import PropTypes from 'prop-types';

import Header from '../components/Header';
import { gStyle } from '../constants';

const ModalWebView = ({ navigation }) => (
  <View style={gStyle.container}>
    <Header close closeText="Close" showLogo />

    <WebView
      bounces={false}
      javaScriptEnabled
      scalesPageToFit
      source={{ uri: navigation.getParam('url', 'https://netflix.com') }}
      startInLoadingState
    />
  </View>
);

ModalWebView.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ModalWebView;
