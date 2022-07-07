import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {solNFTLogo, love} from '@constants/images';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_STACK_ENUM} from '@enum';

const Headers = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <Image source={solNFTLogo} style={styles.logoImage} />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(SCREEN_STACK_ENUM.FAVORITE_NFT_LIST as any)
        }>
        <Image source={love} style={styles.loveImage} />
      </TouchableOpacity>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 2,
  },
  logoImage: {
    width: 117,
    height: 45,
  },

  loveImage: {
    width: 23,
    height: 22,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
