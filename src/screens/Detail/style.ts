import {StyleSheet} from 'react-native';
import {colors} from '@constants/colors';

export const styles = StyleSheet.create({
  textStyle: {
    color: colors.light,
    fontSize: 16,
    marginLeft: 2,
  },

  container: {
    marginHorizontal: 20,
  },

  descriptionsContainer: {
    marginTop: 25,
  },

  flexDirection: {
    flexDirection: 'row',
  },
  flexRow: {
    display: 'flex',
  },

  afterNoonText: {
    fontSize: 21,
  },
  marginHorizontal: {
    marginHorizontal: 15,
  },

  marginVertical: {
    marginVertical: 10,
  },

  actionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.17)',
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginTop: 20,
  },

  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  priceText: {
    color: colors.light,
    fontSize: 20,
    marginLeft: 8,
    marginTop: 'auto',
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttons: {
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 12,
    width: 149,
  },

  makeOfferButton: {
    backgroundColor: colors.dark,
  },
  makeOfferText: {
    color: colors.light,
    textAlign: 'center',
    fontSize: 16,
  },

  buyNowButton: {
    backgroundColor: colors.light,
  },
  buyNowText: {
    color: colors.dark,
    textAlign: 'center',
    fontSize: 16,
  },
  bigCircle: {
    width: 16,
    height: 16,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  priceTextWithImage: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
