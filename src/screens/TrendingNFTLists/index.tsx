import React, {useContext, useRef} from 'react';
import {FlatList, StyleSheet, Dimensions} from 'react-native';

import {AppStateContext} from '@context/context';
import TrendingNfTDetails from '@components/TrendingNFTDetails/trendingNftDetails';

const maxThreshold = 4;

const TrendingNFTLists: React.FC<{navigation?: any}> = ({navigation}) => {
  const flatList = useRef<FlatList>(null);
  const {featuredListings, selectedIndexOfFeaturedNft} =
    useContext(AppStateContext);

  return (
    <FlatList
      initialScrollIndex={selectedIndexOfFeaturedNft}
      ref={flatList}
      snapToAlignment={'center'}
      onScrollToIndexFailed={info => {
        const wait = new Promise(resolve => setTimeout(resolve, 500));
        wait.then(() => {
          flatList.current?.scrollToIndex({index: info.index});
        });
      }}
      viewabilityConfig={{itemVisiblePercentThreshold: 100}}
      pagingEnabled={true}
      decelerationRate={'fast'}
      data={featuredListings}
      keyExtractor={item => item?.listingAddress.toString()}
      initialNumToRender={maxThreshold}
      style={styles.fullScreen}
      renderItem={({item}) => (
        <TrendingNfTDetails item={item} navigation={navigation} />
      )}
    />
  );
};

export default TrendingNFTLists;

let styles = StyleSheet.create({
  fullScreen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  fullHeight: {
    width: '100%',
    height: Dimensions.get('screen').height,
  },
});
