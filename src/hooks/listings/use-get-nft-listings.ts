import {useQuery} from '@apollo/client';

import {gqlQuery} from '@utils/helpers';
import {nftListingsQuery} from '@graphql/queries';

export const useGetNftListings = () => {
  const queryRes = useQuery(gqlQuery(nftListingsQuery));

  return {...queryRes};
};
