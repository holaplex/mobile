import React from 'react';
import {FlatList, View} from 'react-native';

import NFTCard from '@components/NFTCard';
import HomePageTitle from '@components/HomePageTitle';
import {MarketPlaceEnum, SCREEN_STACK_ENUM} from '@enum';
import {useGetMarketPlaceDetails} from '@hooks/marketplace/get-marketplace-detail';

import {styles} from './style';
import {MainLayout} from '@components/MainLayout/MainLayout';

const titleText = 'MarketPlace';

export const Home: React.FC<{navigation?: any}> = ({navigation}) => {
  const {data: jungleCats} = useGetMarketPlaceDetails(
    MarketPlaceEnum.JUNGLECATS,
  );
  const {data: cityShops} = useGetMarketPlaceDetails(MarketPlaceEnum.CITYSHOP);
  const {data: monkeyDao} = useGetMarketPlaceDetails(MarketPlaceEnum.MONKEDAO);
  const {data: skeletonCrew} = useGetMarketPlaceDetails(
    MarketPlaceEnum.SKELETONCREW,
  );
  const {data: theChimpions} = useGetMarketPlaceDetails(
    MarketPlaceEnum.THECHIMPIONS,
  );
  const {data: pixelBands} = useGetMarketPlaceDetails(
    MarketPlaceEnum.PIXELBANDS,
  );

  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={styles.paddingBottom}>
          <HomePageTitle title={titleText} showDiscoverAll={false} />
        </View>

        <FlatList
          data={[
            jungleCats,
            cityShops,
            monkeyDao,
            skeletonCrew,
            theChimpions,
            pixelBands,
          ]}
          keyExtractor={item => item?.marketplace?.subdomain?.toString()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          numColumns={1}
          renderItem={({item}) =>
            item && (
              <NFTCard
                key={item?.marketplace?.subdomain?.toString()}
                imageUrl={item?.marketplace?.bannerUrl}
                name={item?.marketplace?.name}
                navigateTo={SCREEN_STACK_ENUM.MARKETPLACE_NFT_LISTING}
                navigation={navigation}
                address={item?.marketplace?.subdomain}
                showLikeDetails={false}
                showBuyNow={false}
              />
            )
          }
        />
      </View>
    </MainLayout>
  );
};
