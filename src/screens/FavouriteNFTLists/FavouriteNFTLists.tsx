import React, {useContext} from 'react';
import HomePageTitle from '@components/HomePageTitle';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {AppStateContext} from '@context/context';
import NFTCard from '@components/NFTCard';
import {SCREEN_STACK_ENUM} from '@enum';
import {styles} from './styles';

const title = 'Your Favourite NFT';

const FavouriteNFTLists: React.FC<{navigation?: any}> = ({navigation}) => {
  const {favNFT} = useContext(AppStateContext);
  return (
    <ScrollView style={styles.container}>
      <HomePageTitle title={title} showDiscoverAll={false} />
      {favNFT?.length > 0 ? (
        favNFT.map((item: any, index: number) => (
          <NFTCard
            key={index.toString()}
            imageUrl={item?.imageUrl}
            navigation={navigation}
            name={item?.name}
            address={item?.address}
            navigateTo={SCREEN_STACK_ENUM.DETAIL}
          />
        ))
      ) : (
        <View style={styles.textContainer}>
          <Text style={[styles.textStyle]}>You have no NFT as favorite!!!</Text>
          <TouchableOpacity
            style={[styles.exploreMoreContainer]}
            onPress={() => navigation.navigate(SCREEN_STACK_ENUM.NFT)}>
            <Text style={[styles.exploreMoreText]}>Explore More</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default FavouriteNFTLists;
