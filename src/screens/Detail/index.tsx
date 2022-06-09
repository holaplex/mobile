import React, {useCallback} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  Linking,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {useGetNftDetails} from '@hooks';
import {getPrice} from '@utils/helpers';
import {SCREEN_STACK_ENUM} from '@enum';
import NFTCard from '@components/NFTCard';
import {priceIcon} from '@constants/images';
import {styles} from '@screens/Detail/style';

const Detail: React.FC<{navigation?: any}> = ({navigation}) => {
  const route = useRoute<RouteProp<ParamList, 'Detail'>>();

  const {data, loading} = useGetNftDetails(route?.params?.address);

  const getUrl = useCallback(() => {
    if (route.params.isFromAuction) {
      return `https://${route.params.subDomain}.holaplex.com/listings/${route.params.address}`;
    }
    return `https://www.holaplex.com/nfts/${route?.params?.address}`;
  }, [route.params]);

  type ParamList = {
    Detail: {
      address: string;
      isFromAuction: boolean;
      subDomain: string;
    };
  };
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(getUrl());

    if (supported) {
      await Linking.openURL(getUrl());
    } else {
      Alert.alert(`Don't know how to open this URL: ${getUrl()}`);
    }
  }, [getUrl]);

  if (loading) {
    <ActivityIndicator size="large" color="white" />;
  }

  return (
    <>
      <ScrollView>
        <NFTCard
          imageUrl={data?.nft?.image}
          navigation={navigation}
          name={data?.nft?.name}
          address={route?.params?.address}
          navigateTo={SCREEN_STACK_ENUM.DETAIL}
          showBuyNow={false}
        />
        <Text style={[styles.textStyle, styles.descriptionsContainer]}>
          {data?.nft?.description}{' '}
        </Text>
        <View style={styles.actionContainer}>
          {data?.nft?.listings[0]?.price ? (
            <View style={styles.priceContainer}>
              <Text style={[styles.textStyle, styles.priceText]}>Price</Text>
              <View style={[styles.flexRow, styles.flexDirection]}>
                <Image source={priceIcon} style={styles.bigCircle} />
                <Text style={[styles.textStyle, styles.priceText]}>
                  {data?.nft?.listings[0]?.price
                    ? getPrice(data?.nft?.listings[0]?.price)
                    : ''}
                </Text>
              </View>
            </View>
          ) : null}

          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.buttons, styles.makeOfferButton]}
              onPress={handlePress}>
              <Text style={styles.makeOfferText}>Make Offer</Text>
            </Pressable>

            <Pressable
              style={[styles.buttons, styles.buyNowButton]}
              onPress={handlePress}>
              <Text style={styles.buyNowText}>Buy Now</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Detail;
