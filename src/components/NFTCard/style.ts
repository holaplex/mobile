import {StyleSheet} from 'react-native';
import {colors} from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderRadius: 20,
    position: 'relative',
  },

  textStyle: {
    color: colors.light,
  },
  imageStyle: {
    width: '100%',
    height: 497,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  headerContainer: {
    padding: 10,
  },
  headerImageContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    padding: 1,
    backgroundColor: colors.light,
  },
  headerName: {
    marginLeft: 10,
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 18,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },

  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginBottom: 0,
  },

  buttonActionIcon: {
    width: 28,
    height: 26,
  },

  buttonStyle: {
    marginLeft: 'auto',
    backgroundColor: 'white',
    marginTop: 'auto',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  learMoreContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.74)',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 13,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
  },
  leftArrow: {
    width: 6,
    height: 9,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 13,
  },

  smallCircle: {
    width: 8,
    height: 8,
    alignSelf: 'center',
    marginRight: -12,
    marginTop: -4,
  },

  bigCircle: {
    width: 16,
    height: 16,
  },

  priceStyle: {
    marginLeft: 5,
    color: colors.light,
  },

  priceTagStyle: {
    opacity: 0.7,
    fontWeight: '400',
  },

  buyNowButton: {
    backgroundColor: colors.light,
    borderRadius: 8,
    padding: 22,
    paddingVertical: 12,
    shadowColor: 'black',
  },
  buyNowText: {
    color: colors.dark,
    fontSize: 12,
  },

  redCircleStyle: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
});
