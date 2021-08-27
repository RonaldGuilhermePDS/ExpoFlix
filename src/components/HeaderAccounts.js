import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import PropTypes from 'prop-types';

import { colors, device, fonts, gStyle, images } from '../constants';
import SvgEdit from './icons/Svg.Edit';
import SvgPlus from './icons/Svg.Plus';

const HeaderAccounts = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.containerAccounts}>
      <View style={styles.containerUser}>
        <Image source={images.alien} style={styles.avatar} />
        <Text style={[styles.username, styles.usernameActive]}>Alien</Text>
      </View>

      <View style={styles.containerUser}>
        <Image source={images.chicken} style={styles.avatar} />
        <Text style={styles.username}>Chicken</Text>
      </View>

      <View style={styles.containerUser}>
        <Image source={images.dog} style={styles.avatar} />
        <Text style={styles.username}>Dog</Text>
      </View>

      <TouchableOpacity
        activeOpacity={gStyle.activeOpacity}
        onPress={() => navigation.navigate('ModalAddProfile')}
        style={styles.containerUser}>
        <View style={styles.containerPlus}>
          <SvgPlus active={false} size={40} />
        </View>
        <Text style={styles.username}>Add Profile</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      onPress={() => navigation.navigate('ModalManageProfiles')}
      style={styles.containerManage}>
      <SvgEdit active={false} size={18} />
      <Text style={styles.manageText}>Manage Profiles</Text>
    </TouchableOpacity>
  </View>
);

HeaderAccounts.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.black,
    width: '100%',
  },
  containerAccounts: {
    alignItems: 'center',
    backgroundColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
    paddingTop: device.iPhoneNotch ? 64 : 40,
    width: '100%',
  },
  containerUser: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  avatar: {
    height: 64,
    marginBottom: 6,
    resizeMode: 'contain',
    width: 64,
  },
  username: {
    color: colors.inactiveGrey,
    fontFamily: fonts.medium,
    fontSize: 12,
  },
  usernameActive: {
    color: colors.white,
    fontFamily: fonts.bold,
  },
  containerPlus: {
    alignItems: 'center',
    backgroundColor: colors.moreAddProfileBg,
    borderRadius: 32,
    height: 64,
    justifyContent: 'center',
    marginBottom: 4,
    width: 64,
  },
  containerManage: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 24,
  },
  manageText: {
    color: colors.inactiveGrey,
    fontFamily: fonts.medium,
    marginLeft: 4,
  },
});

export default withNavigation(HeaderAccounts);
