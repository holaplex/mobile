/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {ScrollView, View, Text, ActivityIndicator} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';

import {SCREEN_STACK_ENUM} from '@enum';
import NFTCard from '@components/NFTCard';
import {checkIfScrollToBottom} from '@utils/helpers';
import HomePageTitle from '@components/HomePageTitle';
import {useGetNftListsWithCreatorAndAuctions} from '@hooks';
import {useGetMarketPlaceDetails} from '@hooks/marketplace/get-marketplace-detail';

import {styles} from './style';

const limit = 10;

const MarketPlaceNFTListing: React.FC<{navigation?: any}> = ({navigation}) => {
  const route =
    useRoute<RouteProp<ParamList, SCREEN_STACK_ENUM.MARKETPLACE_NFT_LISTING>>();
  const [offset, setOffset] = React.useState(0);
  const [nftLists, setNftLists] = React.useState<any>([]);

  const {data: marketPlaceDetails} = useGetMarketPlaceDetails(
    route.params.address,
  );
  const {data: nftListingsFromMarketPlace, loading} =
    useGetNftListsWithCreatorAndAuctions(
      marketPlaceDetails?.marketplace?.creators?.map(
        (item: any) => item.creatorAddress,
      ),
      [marketPlaceDetails?.marketplace?.auctionHouseAddress],
      limit,
      offset,
    );

  React.useEffect(() => {
    if (nftListingsFromMarketPlace?.nfts) {
      const prevNftLists = nftLists ? [...nftLists] : [];
      setNftLists([...prevNftLists, ...nftListingsFromMarketPlace?.nfts]);
    }
  }, [nftListingsFromMarketPlace]);

  type ParamList = {
    [SCREEN_STACK_ENUM.MARKETPLACE_NFT_LISTING]: {
      address: string;
      name: string;
    };
  };
  return (
    <>
      <View style={styles.titleContainer}>
        <HomePageTitle
          title={`#${route.params.name}`}
          showDiscoverAll={false}
        />
      </View>
      <ScrollView
        onMomentumScrollEnd={e => {
          if (checkIfScrollToBottom(e)) {
            const newOffset = offset + 1;
            setOffset(newOffset);
          }
        }}>
        <View>
          {false ? (
            <View>
              <Text>Loading</Text>
            </View>
          ) : (
            <>
              {nftLists?.map((item: any, index: number) => (
                <NFTCard
                  key={index.toString()}
                  imageUrl={item?.image}
                  navigation={navigation}
                  name={item?.name}
                  offers={item?.offers}
                  address={item?.address}
                  navigateTo={SCREEN_STACK_ENUM.DETAIL}
                />
              ))}
            </>
          )}
        </View>
        {loading && <ActivityIndicator size="large" color="white" />}
      </ScrollView>
    </>
  );
};

export default MarketPlaceNFTListing;
