import {StyleSheet} from 'react-native';
import {colors} from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginTop: 20,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: '#ffffff1C',
    borderRadius: 20,
  },

  subContainer: {
    marginHorizontal: 20,
  },

  textStyle: {
    color: colors.light,
    fontFamily: 'JosefinSans-Light',
  },
  imageStyle: {
    width: '100%',
    height: 172,
  },

  flexDirection: {
    flexDirection: 'row',
  },

  usernameStyle: {
    fontSize: 20,
    marginVertical: 10,
  },
  avatar: {
    marginTop: -30,
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  collectedStyle: {
    marginLeft: 'auto',
  },

  buttonStyle: {
    backgroundColor: colors.light,
    marginLeft: 'auto',

    paddingHorizontal: 24,
    paddingVertical: 8,
    alignSelf: 'center',
    borderRadius: 20,
  },
});
