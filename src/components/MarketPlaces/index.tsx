import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './style';
import {
  circle,
  createdByFirst,
  createdBySecond,
  createdBythird,
} from '@constants/images';

interface IMarketPlaces {
  imageUrl: string;
  NftNumber: number;
  floorPrice: number;
  marketName: string;
}

const MarketPlaces: React.FC<IMarketPlaces> = (props: IMarketPlaces) => {
  const {imageUrl} = props;

  return (
    <View>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.imageStyle}
      />

      <View style={styles.subContainer}>
        <View style={[styles.flexDirection, styles.smallImagePosition]}>
          <Image
            source={createdBythird}
            style={[styles.smallImage, styles.marginImage]}
          />
          <Image
            source={createdByFirst}
            style={[styles.smallImage, styles.marginImage]}
          />
          <Image source={createdBySecond} style={styles.smallImage} />
        </View>
        <Text style={[styles.textStyle, styles.titleStyle]}>
          {props.marketName}
        </Text>

        <View style={styles.flexDirection}>
          <Text style={styles.textStyle}>{props.NftNumber} NFTs</Text>
          {props.floorPrice ? (
            <View style={[styles.flexDirection, styles.marginFloor]}>
              <Text style={[styles.textStyle, styles.marginLeft]}>
                Floor Price
              </Text>
              <View style={styles.flexDirection}>
                <Image source={circle} style={styles.smallCircle} />
                <Image source={circle} style={styles.bigCircle} />
                <Text style={[styles.textStyle, styles.priceStyle]}>
                  {props.floorPrice / 1000000000}
                </Text>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default MarketPlaces;
