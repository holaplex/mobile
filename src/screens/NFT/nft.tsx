/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext} from 'react';

import {
  ScrollView,
  FlatList,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

import {SCREEN_STACK_ENUM} from '@enum';
import NFTCard from '@components/NFTCard';
import {useListFeaturedBuyNowNFT} from '@hooks';
import {AppStateContext} from '@context/context';
import {checkIfScrollToBottom} from '@utils/helpers';
import HomePageTitle from '@components/HomePageTitle';
import TrendingNftCard from '@components/TrendinNftCard/TrendingNftCard';

import {styles} from './style';
import {MainLayout} from '@components/MainLayout/MainLayout';

const trendingTitle = 'Trending Auctions';
const currentListingTitle = 'Current Listings';

const NFT: React.FC<{navigation?: any}> = ({navigation}) => {
  const [offset, setOffset] = React.useState(0);
  const {featuredListings, setSelectedIndexOfFeaturedNft} =
    useContext(AppStateContext);
  const [nftLists, setNftLists] = React.useState<any>([]);

  const {data: buyNowNftCurrentListings, loading} = useListFeaturedBuyNowNFT(
    10,
    offset,
  );

  React.useEffect(() => {
    if (buyNowNftCurrentListings?.featuredListings) {
      const prevNftLists = nftLists ? [...nftLists] : [];
      const newLists = [...buyNowNftCurrentListings?.featuredListings].sort(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (a, b) => 0.5 - Math.random(),
      );
      setNftLists([...prevNftLists, ...newLists]);
    }
  }, [buyNowNftCurrentListings]);

  return (
    <MainLayout>
      <ScrollView
        onMomentumScrollEnd={e => {
          if (checkIfScrollToBottom(e)) {
            const newOffset = offset + 1;
            setOffset(newOffset);
          }
        }}>
        <HomePageTitle title={trendingTitle} showDiscoverAll={false} />
        <View style={[styles.marginTop]}>
          <FlatList
            data={featuredListings}
            keyExtractor={item => item?.listingAddress.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TrendingNftCard
                item={item}
                onClick={() => {
                  setSelectedIndexOfFeaturedNft(index);
                  navigation.push(SCREEN_STACK_ENUM.NFT_TRENDING_LIST);
                }}
              />
            )}
          />
        </View>
        <View style={styles.marginTop}>
          {false ? (
            <View>
              <Text>Loading</Text>
            </View>
          ) : (
            <>
              <HomePageTitle
                title={currentListingTitle}
                showDiscoverAll={false}
              />
              {nftLists.map((item: any, index: number) => (
                <NFTCard
                  key={index.toString()}
                  imageUrl={item?.nft.image}
                  price={item?.nft?.listings[0].price}
                  navigation={navigation}
                  name={item?.nft.name}
                  offers={item?.nft.offers}
                  address={item?.nft?.address}
                  endsAt={item?.endsAt}
                  navigateTo={SCREEN_STACK_ENUM.DETAIL}
                />
              ))}
            </>
          )}
          {loading && <ActivityIndicator size="large" color="white" />}
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default NFT;
