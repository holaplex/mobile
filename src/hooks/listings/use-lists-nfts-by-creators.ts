import {useQuery} from '@apollo/client';

import {gqlQuery} from '@utils/helpers';
import {getNftsLists} from '@graphql/queries';

export const useGetNftListsWithCreatorAndAuctions = (
  creators: Array<string>,
  auctionHouses: Array<string>,
  limit: number,
  offset: number,
) => {
  const queryRes = useQuery(gqlQuery(getNftsLists), {
    variables: {
      creators,
      auctionHouses,
      limit,
      offset,
    },
    skip: !creators,
  });
  return {...queryRes};
};
