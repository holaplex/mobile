import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  marginTop: {
    marginTop: 10,
  },
  textStyle: {
    color: colors.light,
    marginTop: 'auto',
    textAlign: 'center',
  },
  textContainer: {
    marginTop: 100,
  },
  exploreMoreContainer: {
    marginTop: 10,
    backgroundColor: colors.light,
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 2,
  },
  exploreMoreText: {
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
