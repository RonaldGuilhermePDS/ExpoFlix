import * as React from 'react';
import {
  Animated,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { colors, device, fonts, gStyle } from '../constants';

class HeaderSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      focus: false,
      cancelOpacity: new Animated.Value(0),
      inputWidth: new Animated.Value(100),
      text: '',
    };

    this.onBlur = this.onBlur.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onBlur() {
    const { cancelOpacity, inputWidth, text } = this.state;

    this.setState({ focus: false });

    if (text === '') {
      Animated.timing(inputWidth, {
        duration: 300,
        toValue: 100,
        useNativeDriver: false,
      }).start();
      Animated.timing(cancelOpacity, {
        duration: 300,
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }
  }

  onCancel() {
    Keyboard.dismiss();

    this.setState({ text: '' }, () => this.onBlur());
  }

  onFocus() {
    const { cancelOpacity, inputWidth } = this.state;

    this.setState({ focus: true });

    Animated.timing(inputWidth, {
      duration: 300,
      toValue: 80,
      useNativeDriver: false,
    }).start();
    Animated.timing(cancelOpacity, {
      duration: 300,
      toValue: 1,
      useNativeDriver: false,
    }).start();
  }

  render() {
    const { cancelOpacity, focus, inputWidth, text } = this.state;
    const inputOverride = focus || text ? { textAlign: 'left' } : {};
    const percentage = inputWidth.interpolate({
      inputRange: [80, 100],
      outputRange: ['80%', '100%'],
    });

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.containerInput, { width: percentage }]}>
          <TextInput
            autoCapitalize="none"
            autoFocus
            keyboardAppearance="dark"
            onBlur={this.onBlur}
            onChangeText={(input) => this.setState({ text: input })}
            onFocus={this.onFocus}
            placeholder="Search"
            placeholderTextColor={colors.searchIcon}
            selectionColor={colors.brandPrimary}
            style={[styles.input, inputOverride]}
            value={text}
          />
        </Animated.View>
        <Animated.View
          style={[styles.containerCancel, { opacity: cancelOpacity }]}>
          <TouchableOpacity
            activeOpacity={gStyle.activeOpacity}
            onPress={this.onCancel}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flexDirection: 'row',
    paddingBottom: 12,
    paddingHorizontal: 8,
    paddingTop: device.iPhoneNotch ? 54 : 30,
    width: '100%',
  },
  containerInput: {
    width: '80%',
  },
  input: {
    backgroundColor: colors.searchBarBg,
    borderRadius: 4,
    color: colors.heading,
    fontFamily: fonts.regular,
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    textAlign: 'center',
  },
  containerCancel: {
    width: '20%',
  },
  cancel: {
    color: colors.heading,
    fontFamily: fonts.light,
    fontSize: 16,
    paddingVertical: 4,
    textAlign: 'center',
  },
});

export default HeaderSearch;
