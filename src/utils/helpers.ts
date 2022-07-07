import {gql} from '@apollo/client';
import {
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {Listing} from '@type';

export const gqlQuery = (query: string) => {
  return gql`
    ${query}
  `;
};

const CAROUSEL_ROWS: number = 1;
const CAROUSEL_COLS_LARGE_SCREEN: number = 3;
const CAROUSEL_PAGES: number = 3;
const N_LISTINGS: number =
  CAROUSEL_ROWS * CAROUSEL_COLS_LARGE_SCREEN * CAROUSEL_PAGES;

const WHICHDAO = 'MONKE' as string;
const DAO_LIST_IPFS =
  'https://ipfs.cache.holaplex.com/bafkreidnqervhpcnszmjrj7l44mxh3tgd7pphh5c4jknmnagifsm62uel4';

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} =
  Dimensions.get('window');

export async function getAndPrepListings(): Promise<Listing[]> {
  async function DAOStoreFrontList() {
    if (WHICHDAO) {
      const response = await fetch(DAO_LIST_IPFS);
      const json = await response.json();

      return json[WHICHDAO];
    }
    return [];
  }

  function isAuction(): boolean {
    return true;
  }

  function compareListingsForSort(a: Listing, b: Listing): number {
    const aBids: number = a.totalUncancelledBids ? a.totalUncancelledBids : 0;
    const bBids: number = b.totalUncancelledBids ? b.totalUncancelledBids : 0;
    if (aBids != bBids) {
      // primarily sort by most bids first
      return bBids - aBids;
    } else {
      // secondarily sort by ending soonest
      const aEnd: number = a.endsAt
        ? Date.parse(a.endsAt)
        : Number.MAX_SAFE_INTEGER;
      const bEnd: number = b.endsAt
        ? Date.parse(b.endsAt)
        : Number.MAX_SAFE_INTEGER;
      return aEnd - bEnd;
    }
  }

  function applyListingFilterAndSort(listings: Listing[]): Listing[] {
    const result: Listing[] = listings.filter(isAuction);
    result.sort(compareListingsForSort);
    return result;
  }

  const selectedDaoSubdomains = await DAOStoreFrontList();
  const res = await fetch('https://metaplex-indexer-staging.herokuapp.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'getListings',
      params: [],
      id: 1337,
    }),
  });

  const allListings = await res.json();
  let daoFilteredListings = allListings.result;

  if (WHICHDAO) {
    daoFilteredListings = daoFilteredListings.filter((listing: any) =>
      selectedDaoSubdomains.includes(listing.subdomain),
    );
  }
  return applyListingFilterAndSort(daoFilteredListings).slice(0, N_LISTINGS);
}

const captureCid = /https:\/\/(.*).ipfs.dweb.*$/;

export const maybeCDN = (uri: string) => {
  const cdnURI = uri.replace(captureCid, 'https://ipfs.cache.holaplex.com/$1');
  return cdnURI ?? uri;
};

export async function fetchNFTDataFromIPFS(uri: string) {
  const res = await fetch(maybeCDN(uri));

  if (res.ok) {
    const nftJson = await res.json();
    return nftJson;
  }
}

export const getPrice = (price: number) => {
  return price / 1000000000;
};

export const checkIfScrollToBottom = (
  e: NativeSyntheticEvent<NativeScrollEvent>,
) => {
  const scrollPosition = e.nativeEvent.contentOffset.y;
  const scrollViewHeight = e.nativeEvent.layoutMeasurement.height;
  const contentHeight = e.nativeEvent.contentSize.height;
  const isScrollToBottom = scrollViewHeight + scrollPosition;
  return isScrollToBottom >= contentHeight - 50;
};
