/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {useColorScheme, View} from 'react-native';

import {apolloClient} from '@configure';
import {colors} from '@constants/colors';
import {ApolloProvider} from '@apollo/client';
import StackNavigator from '@navigator/stackNavigator';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Listing} from '@type';
import {getAndPrepListings} from '@utils/helpers';
import {AppStateContext} from '@context/context';
import {getStoredData, INFT, _storeData} from '@utils/async-storage';
import RNSplashScreen from 'react-native-splash-screen';

const App = () => {
  const [featuredListings, setFeaturedListings] = useState<Listing[]>([]);
  const [favNFT, setFavNFT] = useState<INFT[]>([]);

  const [selectedIndexOfFeaturedNft, setSelectedIndexOfFeaturedNft] =
    useState<number>(0);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.dark : colors.light,
    flex: 1,
  };

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.light,
      background: colors.dark,
      card: colors.light,
      text: colors.light,
      border: colors.light,
      notification: colors.light,
    },
  };
  React.useEffect(() => {
    getAndPrepListings()
      .then(listings => {
        setFeaturedListings(listings);
      })
      .catch(e => console.log('Unable to load featured auctions', e));
  }, []);

  React.useEffect(() => {
    const getStoredNFtLists = async () => {
      const nft = await getStoredData();
      if (nft) {
        setFavNFT(nft);
      }
    };
    getStoredNFtLists();
    setTimeout(() => {
      RNSplashScreen.hide();
    }, 400);
  }, []);

  const addOrRemoveNFTAsFav = (nft: INFT) => {
    const prevNft = [...favNFT];
    if (prevNft.some(item => item.address === nft.address)) {
      const newNFt = prevNft.filter(item => item.address !== nft.address);
      _storeData(newNFt);
      setFavNFT(newNFt);
    } else {
      prevNft.push(nft);
      _storeData(prevNft);
      setFavNFT(prevNft);
    }
  };

  const checkIfNFTIsFav = (address: string) => {
    const favNft = [...favNFT];
    return favNft.some(item => item.address === address);
  };

  return (
    <AppStateContext.Provider
      value={{
        featuredListings,
        selectedIndexOfFeaturedNft,
        setSelectedIndexOfFeaturedNft,
        favNFT,
        addOrRemoveNFTAsFav,
        checkIfNFTIsFav,
      }}>
      <ApolloProvider client={apolloClient}>
        <View style={backgroundStyle}>
          {/* <SafeAreaProvider> */}
          <NavigationContainer theme={MyTheme}>
            <StackNavigator />
          </NavigationContainer>
          {/* </SafeAreaProvider> */}
        </View>
      </ApolloProvider>
    </AppStateContext.Provider>
  );
};

export default App;
