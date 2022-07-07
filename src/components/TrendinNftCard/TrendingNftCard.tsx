import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '@constants/colors';
import {Listing, NFTMetadata} from '@type';
import {fetchNFTDataFromIPFS} from '@utils/helpers';

interface ITrendingNftCard {
  onClick: (item: any) => void;
  item: Listing;
}

const TrendingNftCard: React.FC<ITrendingNftCard> = ({item, onClick}) => {
  const [nft, setNFT] = React.useState<NFTMetadata | null>(null);

  const nftMetadata = item?.items?.[0];
  React.useEffect(() => {
    const getNftDetails = async () => {
      const nftDetails = await fetchNFTDataFromIPFS(nftMetadata.uri);
      setNFT(nftDetails);
    };
    getNftDetails();
  }, [nftMetadata.uri]);

  return (
    <View>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => onClick(item)}>
        <Image source={{uri: nft?.image}} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default TrendingNftCard;

const styles = StyleSheet.create({
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5,
    padding: 2,
    backgroundColor: colors.light,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  textStyle: {
    color: 'white',
    width: 90,
    textAlign: 'center',
    marginTop: 2,
  },
});
