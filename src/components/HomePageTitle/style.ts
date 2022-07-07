import {StyleSheet} from 'react-native';
import {colors} from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
  },

  borderStyle: {
    borderBottomWidth: 1,
    borderColor: colors.light,
    opacity: 0.2,
    marginTop: 15,
  },

  iconStyle: {
    marginLeft: 15,
    marginRight: 10,
  },

  titleStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.light,
  },

  discoverAllStyle: {
    marginLeft: 'auto',
    marginRight: 5,
    opacity: 0.5,
  },
});
