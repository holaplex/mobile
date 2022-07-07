import {AsyncStorage} from 'react-native';

export interface INFT {
  address: string;
  imageUrl: string;
  name: string;
}

const storageKey = 'nft';

export const _storeData = async (nft: INFT[]) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(nft));
  } catch (error) {
    // Error saving data
  }
};

export const getStoredData = async () => {
  try {
    const nfts = await AsyncStorage.getItem(storageKey);
    if (nfts) {
      return JSON.parse(nfts);
    }
    return null;
  } catch (error) {
    // Error saving data
  }
};
