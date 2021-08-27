import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PropTypes from 'prop-types';

import HeaderManage from '../components/HeaderManage';
import SvgEdit from '../components/icons/Svg.Edit';
import SvgPlus from '../components/icons/Svg.Plus';
import { colors, fonts, gStyle, images } from '../constants';

const ModalManageProfiles = ({ navigation }) => (
  <View style={[gStyle.container, { backgroundColor: colors.black }]}>
    <HeaderManage />

    <View style={styles.container}>
      <View style={styles.containerUser}>
        <Image source={images.alien} style={styles.avatar} />
        <Text style={styles.text}>Alien</Text>
        <View style={styles.overlay} />
        <View style={styles.containerSvg}>
          <SvgEdit active size={40} />
        </View>
      </View>

      <View style={styles.containerUser}>
        <Image source={images.chicken} style={styles.avatar} />
        <Text style={styles.text}>Chicken</Text>
        <View style={styles.overlay} />
        <View style={styles.containerSvg}>
          <SvgEdit active size={40} />
        </View>
      </View>

      <View style={styles.containerUser}>
        <Image source={images.dog} style={styles.avatar} />
        <Text style={styles.text}>Dog</Text>
        <View style={styles.overlay} />
        <View style={styles.containerSvg}>
          <SvgEdit active size={40} />
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={gStyle.activeOpacity}
        onPress={() => navigation.navigate('ModalAddProfile')}
        style={styles.containerUser}>
        <View style={styles.containerPlus}>
          <View style={styles.plusBackground}>
            <SvgPlus active size={40} />
          </View>
        </View>
        <Text style={styles.text}>Add Profile</Text>
      </TouchableOpacity>
    </View>
  </View>
);

ModalManageProfiles.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const BLOCK_SIZE = 108;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 60,
    width: 280,
  },
  containerUser: {
    marginBottom: 16,
  },
  containerSvg: {
    alignItems: 'center',
    height: BLOCK_SIZE,
    justifyContent: 'center',
    position: 'absolute',
    width: BLOCK_SIZE,
  },
  overlay: {
    backgroundColor: colors.black50,
    height: BLOCK_SIZE,
    position: 'absolute',
    top: 0,
    width: BLOCK_SIZE,
  },
  avatar: {
    height: BLOCK_SIZE,
    resizeMode: 'contain',
    width: BLOCK_SIZE,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
  containerPlus: {
    alignItems: 'center',
    height: BLOCK_SIZE,
    justifyContent: 'center',
    width: BLOCK_SIZE,
  },
  plusBackground: {
    alignItems: 'center',
    backgroundColor: colors.moreAddProfileBg,
    borderRadius: 34,
    height: 68,
    justifyContent: 'center',
    width: 68,
  },
});

export default ModalManageProfiles;
