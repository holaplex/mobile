import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {colors} from '@constants/colors';
import DetailScreen from '@screens/Detail';
import ButtomTabs from '@navigator/buttomTabs';

import TrendingNFTLists from '@screens/TrendingNFTLists';
import {SCREEN_STACK_ENUM} from '@enum/screen-stack-enum';

import FavouriteNFTLists from '@screens/FavouriteNFTLists/FavouriteNFTLists';
import MarketPlaceNFTListing from '@screens/MarketPlaceNFTListings/market-place-nft-listings';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={SCREEN_STACK_ENUM.BUTTOMTABS}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: () => {
            return null;
          },
          headerStyle: {
            backgroundColor: colors.dark,
          },
        }}
        name={SCREEN_STACK_ENUM.BUTTOMTABS}
        component={ButtomTabs}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: '',
          headerTitle: () => {
            return null;
          },
          headerStyle: {
            backgroundColor: colors.dark,
          },
        }}
        name={SCREEN_STACK_ENUM.DETAIL}
        component={DetailScreen}
      />
      <Stack.Screen
        options={{
          title: '',
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.dark,
          },
        }}
        name={SCREEN_STACK_ENUM.MARKETPLACE_NFT_LISTING}
        component={MarketPlaceNFTListing}
      />

      <Stack.Screen
        options={{
          title: '',
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.dark,
          },
        }}
        name={SCREEN_STACK_ENUM.NFT_TRENDING_LIST}
        component={TrendingNFTLists}
      />
      <Stack.Screen
        options={{
          title: '',
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.dark,
          },
        }}
        name={SCREEN_STACK_ENUM.FAVORITE_NFT_LIST}
        component={FavouriteNFTLists}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
