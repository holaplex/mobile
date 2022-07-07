import React, {useCallback, useContext} from 'react';
import {View, Text, Image, TouchableOpacity, Share} from 'react-native';
import {styles} from './style';
import {priceIcon, unLove, love} from '@constants/images';
import {SCREEN_STACK_ENUM} from '@enum/screen-stack-enum';
import {useTimer} from 'react-timer-hook';
import {getPrice} from '@utils/helpers';
import {AppStateContext} from '@context/context';

const NFTCard: React.FC<{
  imageUrl: string;
  price?: Number;
  navigation: any;
  name?: string;
  offers?: Array<any>;
  address?: string;
  navigateTo: SCREEN_STACK_ENUM;
  endsAt?: string | null;
  showLikeDetails?: boolean;
  showBuyNow?: boolean;
}> = ({
  imageUrl,
  price,
  navigation,
  name,
  address,
  navigateTo,
  endsAt,
  showLikeDetails = true,
  showBuyNow = true,
}) => {
  const timerSettings = {
    autoStart: true,
    expiryTimestamp: new Date('2022-12-14T14:02:50+00:00'),
    onExpire: () => console.warn('onExpire called'),
  };
  const {addOrRemoveNFTAsFav, checkIfNFTIsFav} = useContext(AppStateContext);

  const url = 'https://www.holaplex.com/nfts/';
  const {seconds, minutes, hours, days} = useTimer(timerSettings);

  const handlePress = useCallback(
    async nftAddress => {
      try {
        const result = await Share.share({
          message: url + nftAddress,
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
          } else {
          }
        } else if (result.action === Share.dismissedAction) {
        }
      } catch (error) {}
    },
    [url],
  );

  const onLoveOrUnLovePress = () => {
    addOrRemoveNFTAsFav({
      address,
      imageUrl,
      name,
    });
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={styles.headerImageContainer}>
              <Image source={{uri: imageUrl}} style={styles.avatar} />
            </View>
            <Text style={[styles.textStyle, styles.headerName]}>{name}</Text>
          </View>
        </View>
        <Image source={{uri: imageUrl}} style={styles.imageStyle} />
        <TouchableOpacity
          style={styles.learMoreContainer}
          onPress={() => navigation.navigate(navigateTo, {address, name})}>
          <Text style={[styles.textStyle]}>Learn More</Text>
          <View style={styles.flexRow}>
            {price && (
              <View style={styles.flexRow}>
                <Image source={priceIcon} style={styles.bigCircle} />
                <Text style={[styles.textStyle, styles.priceStyle]}>
                  {getPrice(+price)} Price
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
      {showLikeDetails && (
        <View style={styles.actionContainer}>
          <View style={styles.flexRow}>
            <TouchableOpacity onPress={onLoveOrUnLovePress}>
              <Image
                source={checkIfNFTIsFav(address) ? love : unLove}
                style={styles.buttonActionIcon}
              />
            </TouchableOpacity>
            {endsAt && (
              <Text
                style={[styles.textStyle, {marginLeft: 19, margin: 'auto'}]}>
                Ends in {days}:{hours}:{minutes}:{seconds}
              </Text>
            )}
          </View>
          {showBuyNow && (
            <View>
              <TouchableOpacity
                style={styles.buyNowButton}
                onPress={() => handlePress(address)}>
                <Text style={styles.buyNowText}>Share</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default NFTCard;
