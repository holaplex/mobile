import React, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
  ActivityIndicator,
  Alert,
  Share,
} from 'react-native';
import {colors} from '@constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  fetchNFTDataFromIPFS,
} from '@utils/helpers';

import {SCREEN_STACK_ENUM} from '@enum';
import {Listing, NFTMetadata} from '@type';

interface ITrendingNFTDetails {
  item: Listing;
  navigation: any;
}
const TrendingNfTDetails: React.FC<ITrendingNFTDetails> = ({
  item,
  navigation,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [nft, setNFT] = React.useState<NFTMetadata | null>(null);

  const getUrl = (subDomain: string, address: string) => {
    return `https://${subDomain}.holaplex.com/listings/${address}`;
  };

  const nftMetadata = item?.items?.[0];
  React.useEffect(() => {
    setLoading(true);
    const getNftDetails = async () => {
      const nftDetails = await fetchNFTDataFromIPFS(nftMetadata.uri);
      setNFT(nftDetails);
      setLoading(false);
    };
    getNftDetails();
  }, [nftMetadata.uri]);

  const handlePress = useCallback(async () => {
    try {
      const result = await Share.share({
        message: getUrl(item.subdomain, nftMetadata?.metadataAddress),
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(
        `Don't know how to open this URL: ${getUrl(
          item.subdomain,
          nftMetadata?.metadataAddress,
        )}`,
      );
    }
  }, [nftMetadata?.metadataAddress, item.subdomain]);

  const statusBarHeight = StatusBar.currentHeight || 0;
  return (
    <SafeAreaView
      style={[styles.container, {height: WINDOW_HEIGHT - statusBarHeight}]}>
      <StatusBar barStyle={'light-content'} />

      <TouchableOpacity
        style={styles.crossContainer}
        onPress={() => navigation.navigate(SCREEN_STACK_ENUM.NFT as any)}>
        <Entypo name="chevron-left" color={colors.light} size={25} />
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Image source={{uri: nft?.image}} style={styles.image} />
      )}

      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.nftText}>{nftMetadata.name}</Text>
          <View style={styles.flexRow}>
            <Image source={{uri: item?.logoUrl}} style={styles.logoUrl} />
            <Text style={[styles.textStyle, styles.storeTitle]}>
              {item?.storeTitle}
            </Text>
          </View>
        </View>
        <View style={styles.buyNowContainer}>
          <TouchableOpacity style={styles.buyNowButton} onPress={handlePress}>
            <Text style={styles.buyNowText}>Share Now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.learnMoreButton}
            onPress={() =>
              navigation.navigate(SCREEN_STACK_ENUM.DETAIL as any, {
                address: nftMetadata?.metadataAddress,
                isFromAuction: true,
                subDomain: item.subdomain,
              })
            }>
            <Text style={styles.textStyle}>Learn More</Text>
          </TouchableOpacity>
        </View>

        <View />
      </View>
    </SafeAreaView>
  );
};

export default TrendingNfTDetails;

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,

    backgroundColor: colors.dark,
    position: 'relative',
  },

  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },

  crossContainer: {
    position: 'absolute',
    zIndex: 3,
    left: 0,
    margin: Platform.OS === 'android' ? 10 : 20,
    backgroundColor: colors.lightGrey,
    borderRadius: 50,
    top: Platform.OS === 'android' ? 10 : 20,
  },
  logoUrl: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  storeTitle: {
    marginLeft: 12,
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '40%',
  },
  image: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    position: 'absolute',
  },

  detailsContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 20,
    paddingBottom: 30,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.74)',
  },
  textStyle: {
    color: colors.light,
    fontSize: 14,
  },
  nftText: {
    color: colors.light,
    fontSize: 24,
    width: '70%',
  },
  buyNowContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 10,
    paddingBottom: 10,
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

  learnMoreButton: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  leftArrow: {
    width: 6,
    height: 9,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 13,
  },
});
